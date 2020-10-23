<?php

/*
 * This file is part of fof/follow-tags.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Simonxeko\FollowUsers\Listeners;

use Flarum\Approval\Event\PostWasApproved;
use Flarum\Discussion\Event\Started;
use Flarum\Post\Event\Posted;
use Simonxeko\FollowUsers\Jobs;
use Illuminate\Events\Dispatcher;

class QueueNotificationJobs
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Started::class, [$this, 'whenDiscussionStarted']);
        $events->listen(Posted::class, [$this, 'whenPostCreated']);
        $events->listen(PostWasApproved::class, [$this, 'whenPostApproved']);
    }

    public function whenDiscussionStarted(Started $event)
    {
        app('flarum.queue.connection')->push(
            new Jobs\SendNotificationWhenDiscussionIsStarted($event->discussion)
        );
    }

    public function whenPostCreated(Posted $event)
    {
        if (!$event->post->discussion->exists || $event->post->number == 1) {
            return;
        }

        // TODO: Support reply option?
        /* app('flarum.queue.connection')->push(
            new Jobs\SendNotificationWhenReplyIsPosted($event->post, $event->post->discussion->last_post_number)
        ); */
    }

    public function whenPostApproved(PostWasApproved $event)
    {
        if (!$event->post->discussion->exists) {
            return;
        }

        app('flarum.queue.connection')->push(
            $event->post->number == 1
                ? new Jobs\SendNotificationWhenDiscussionIsStarted($event->post->discussion)
                : new Jobs\SendNotificationWhenReplyIsPosted($event->post, $event->post->number - 1)
        );
    }
}
