<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Commands;

use Xelson\Chat\Message;
use Xelson\Chat\MessageRepository;
use Flarum\User\AssertPermissionTrait;

class DeleteChatHandler
{
    use AssertPermissionTrait;

    /**
     * @var MessageRepository
     */
    protected $messages;

    /**
     * @param MessageRepository             $messages
     */
    public function __construct(MessageRepository $messages) 
    {
        $this->messages  = $messages;
    }

    /**
     * Handles the command execution.
     *
     * @param DeleteChat $command
     * @return null|string
     */
    public function handle(DeleteChat $command)
    {
        $messageId = $command->id;
        $actor = $command->actor;

        $this->assertCan(
            $actor,
            'pushedx-chat.permissions.delete'
        );

		$message = $this->messages->findOrFail($messageId);
		
		if($message->deleted_by)
		{
			if($message->deleted_by != $actor->id)
			{
				$this->assertCan(
					$actor,
					'pushedx-chat.permissions.moderate.delete'
				);
			}	
			$message->deleted_by = null;
		}
		else 
		{
			if($message->actorId != $actor->id)
			{
				$this->assertCan(
					$actor,
					'pushedx-chat.permissions.moderate.delete'
				);
			}	
			$message->deleted_by = $actor->id;
		}
        
        $message->save();

        $message->invoker = $actor->id;
        $message->event = 'pushedx-chat.socket.event.delete';

        return $message;
    }
}
