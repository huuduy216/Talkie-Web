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

namespace Simonxeko\FollowUsers\Events;

use Flarum\User\User;

class Following
{
    /**
     * The user who is performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The user who is getting followed.
     *
     * @var array
     */
    public $user;

    /**
     * @param User $actor The user who is performing the action.
     * @param User $user  The user who is getting followed.
     */
    public function __construct(User $actor, User $user)
    {
        $this->actor = $actor;
        $this->user = $user;
    }
}
