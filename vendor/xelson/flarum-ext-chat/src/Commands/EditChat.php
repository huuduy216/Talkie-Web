<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Commands;

use Flarum\User\User;

class EditChat
{
    /**
     * The chat message id
     *
     * @var int
     */
	public $id;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;
	
    /**
     * Chat message content
     *
     * @var string
     */
    public $msg;

    /**
     * @param int		$id
     * @param User		$actor
	 * @param string	$msg
     */
    public function __construct($id, User $actor, $msg)
    {
        $this->id = $id;
		$this->actor = $actor;
		$this->msg = $msg;
    }
}
