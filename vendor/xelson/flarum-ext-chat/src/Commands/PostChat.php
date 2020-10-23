<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Commands;

use Flarum\User\User;

class PostChat
{
    /**
     * The chat message
     *
     * @var string
     */
    public $msg;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * @param int                          $postId The ID of the post to upload the image for.
     * @param User                         $actor  The user performing the action.
     */
    public function __construct(/*\string*/ $msg, User $actor)
    {
        $this->msg = $msg;
        $this->actor = $actor;
    }
}
