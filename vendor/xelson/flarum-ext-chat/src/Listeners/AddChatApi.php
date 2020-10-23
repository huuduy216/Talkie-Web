<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Listeners;

use Xelson\Chat\Api\Controllers\PostChatController;
use Xelson\Chat\Api\Controllers\FetchChatController;
use Xelson\Chat\Api\Controllers\EditChatController;
use Xelson\Chat\Api\Controllers\DeleteChatController;
use Xelson\Chat\Api\Controllers\ShowUserSafeController;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\ConfigureApiRoutes;
use Flarum\Api\Event\Serializing;
use Illuminate\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;

class AddChatApi
{
    protected $settings;
    
    public function __construct(SettingsRepositoryInterface $settings) 
    {
        $this->settings = $settings;
    }

    /**
     * Subscribes to the Flarum api routes configuration event.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiRoutes::class, [$this, 'configureApiRoutes']);
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * Registers our routes.
     *
     * @param ConfigureApiRoutes $event
     */
    public function configureApiRoutes(ConfigureApiRoutes $event)
    {
        $event->post('/chat', 'pushedx.chat.post', PostChatController::class);
        $event->get('/chat/{id}', 'pushedx.chat.fetch', FetchChatController::class);
        $event->patch('/chat/{id}', 'pushedx.chat.edit', EditChatController::class);
        $event->delete('/chat/{id}', 'pushedx.chat.delete', DeleteChatController::class);

        $event->get('/chat/user/{id}', 'pushedx.chat.user', ShowUserSafeController::class);
    }

    /**
     * Gets the api attributes and makes them available to the forum.
     *
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if($event->isSerializer(ForumSerializer::class)) 
        {
            $permissions = ['pushedx-chat.permissions.chat', 'pushedx-chat.permissions.edit',
            'pushedx-chat.permissions.delete', 'pushedx-chat.permissions.moderate.delete'];

            foreach($permissions as $permission)
                $event->attributes[$permission] = $event->actor->can($permission);

            $event->attributes['pushedx-chat.settings.charlimit'] = $this->settings->get('pushedx-chat.settings.charlimit');
        }
    }
}
