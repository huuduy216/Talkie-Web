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
use Xelson\Chat\MessageValidator;
use Xelson\Chat\MessageFloodgate;
use Flarum\User\AssertPermissionTrait;

class PostChatHandler
{
    use AssertPermissionTrait;

    /**
     * @var MessageValidator
     */
    protected $validator;

    /**
     * @var MessageFloodgate
     */
    protected $floodgate;

    /**
     * @param MessageValidator      $validator
     * @param MessageFloodgate      $floodgate
     */
    public function __construct(
        MessageValidator $validator,
        MessageFloodgate $floodgate
    ) 
    {
        $this->validator = $validator;
        $this->floodgate = $floodgate;
    }

    /**
     * Handles the command execution.
     *
     * @param PostChat $command
     * @return null|string
     */
    public function handle(PostChat $command)
    {
        $actor = $command->actor;
        $content = $command->msg;

        $this->assertCan(
            $actor,
            'pushedx-chat.permissions.chat'
        );

        $this->floodgate->assertNotFlooding($actor);

        $message = Message::build(
            $content,
            $actor->id,
            Carbon::now()
        );

        $this->validator->assertValid($message->getDirty());

        $message->save();

        $message->event = 'pushedx-chat.socket.event.post';

        return $message;
    }
}
