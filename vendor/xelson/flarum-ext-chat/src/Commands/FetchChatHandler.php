<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Commands;

use Xelson\Chat\MessageRepository;

class FetchChatHandler
{
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
     * @return null|string
     *
     */
    public function handle(FetchChat $command)
    {
        $messageId = $command->id;
        $messages = $this->messages->fetch($messageId);

        return $messages;
    }
}
