<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Commands;

use Carbon\Carbon;
use Xelson\Chat\Message;
use Xelson\Chat\MessageRepository;
use Xelson\Chat\MessageValidator;
use Flarum\User\AssertPermissionTrait;

class EditChatHandler
{
    use AssertPermissionTrait;

    /**
     * @var MessageRepository
     */
    protected $messages;

    /**
     * @var MessageValidator
     */
    protected $validator;

    /**
     * @param MessageRepository             $messages
     * @param MessageValidator              $validator
     */
    public function __construct(
        MessageRepository $messages,
        MessageValidator $validator
    ) {
        $this->messages  = $messages;
        $this->validator = $validator;
    }

    /**
     * Handles the command execution.
     *
     * @param EditChat $command
     * @return null|string
     */
    public function handle(EditChat $command)
    {
        $messageid = $command->id;
        $actor = $command->actor;
        $content = $command->msg;

        $this->assertCan(
            $actor,
            'pushedx-chat.permissions.edit'
        );

        $message = $this->messages->findOrFail($messageid);
        $this->assertPermission($actor->id == $message->actorId);

        $message->message = $content;
        $message->edited_at = Carbon::now();

        $this->validator->assertValid($message->getDirty());

        $message->save();

        $message->event = 'pushedx-chat.socket.event.edit';

        return $message;
    }
}
