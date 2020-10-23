<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Api\Serializers;

use Xelson\Chat\PusherWrapper;
use Flarum\Api\Serializer\AbstractSerializer;

class ChatSerializer extends AbstractSerializer
{
    /**
     * @var string
     */
    protected $type = 'chatmessage';

    /**
     * @var PusherWrapper
     */
    protected $pusher;

    /**
     * @param PusherWrapper                 $pusher
     */
    public function __construct(PusherWrapper $pusher) 
    {
        $this->pusher = $pusher->pusher;
    }

    /**
     * Get the default set of serialized attributes for a model.
     *
     * @param object|array $model
     * @return array
     */
    protected function getDefaultAttributes($message)
    {
        $attributes = $message->getAttributes();
        $attributes['created_at'] = $this->formatDate($message->created_at);
        if($attributes['edited_at']) $attributes['edited_at'] = $this->formatDate($message->edited_at);
        if(array_key_exists('event', $attributes)) $this->pusher->trigger('public', $attributes['event'], $attributes);

        return $attributes;
    }
}
