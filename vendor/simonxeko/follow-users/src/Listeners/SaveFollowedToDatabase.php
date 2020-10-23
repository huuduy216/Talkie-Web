<?php

/**
 *
 *  This file is part of fof/ignore-users.
 *
 *  Copyright (c) 2019 FriendsOfFlarum..
 *
 *  For the full copyright and license information, please view the license.md
 *  file that was distributed with this source code.
 *
 */

namespace Simonxeko\FollowUsers\Listeners;

use Carbon\Carbon;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Event\Saving;
use Simonxeko\FollowUsers\Events\Following;
use Simonxeko\FollowUsers\Events\Unfollowing;
use Illuminate\Contracts\Events\Dispatcher;

class SaveFollowedToDatabase
{
    use AssertPermissionTrait;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @param Dispatcher $events
     */
    public function __construct(Dispatcher $events)
    {
        $this->events = $events;
    }

    public function handle(Saving $event)
    {
        $attributes = array_get($event->data, 'attributes', []);

        if (array_key_exists('followed', $attributes)) {
            $user = $event->user;
            $actor = $event->actor;

            // Ignore the accessibility $this->assertCan($actor, 'follow', $user);

            $followed = !!$attributes['followed'];

            $changed = false;
            $exists = $actor->followedUsers()->where('followed_user_id', $user->id)->exists();

            if ($followed) {
                if (!$exists) {
                    $this->events->dispatch(new Following($user, $actor));
                    $actor->followedUsers()->attach($user, []);
                    $changed = true;
                }
            } elseif ($exists) {
                $this->events->dispatch(new Unfollowing($user, $actor));
                $actor->followedUsers()->detach($user);
                $changed = true;
            }

            if ($changed) {
                $actor->load('followedUsers');
                $user->load('followedBy');
            }
        }
    }
}
