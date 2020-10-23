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

namespace Simonxeko\FollowUsers\Listeners;

use Flarum\Api\Controller;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;

class AddFollowedUsersRelationship
{

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        // TODO need to configure followed_at via ConfigureModelDates?
        $events->listen(GetModelRelationship::class, [$this, 'getModelRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'prepareApiData']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeRequestsRelationship']);
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param GetApiRelationship $event
     * @return \Tobscure\JsonApi\Relationship|null
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(CurrentUserSerializer::class, 'followedUsers')) {
            return $event->serializer->hasMany($event->model, UserSerializer::class, 'followedUsers');
        }
    }

    /**
     * @param GetModelRelationship $event
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function getModelRelationship(GetModelRelationship $event)
    {
        if ($event->isRelationship(User::class, 'followedUsers')) {
            return $event->model->belongsToMany(User::class, 'users_followers', 'user_id', 'followed_user_id');
        }

        if ($event->isRelationship(User::class, 'followedBy')) {
            return $event->model->belongsToMany(User::class, 'users_followers', 'followed_user_id', 'user_id');
        }
    }

    /**
     * @param WillSerializeData $event
     */
    public function prepareApiData(WillSerializeData $event)
    {
        if ($event->isController(Controller\ListUsersController::class) || $event->isController(Controller\ShowUserController::class)) {
            $actor = $event->request->getAttribute('actor');
            $actor->load('followedUsers');
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeRequestsRelationship(WillGetData $event)
    {

        if ($event->isController(Controller\ListUsersController::class)
            || $event->isController(Controller\ShowUserController::class)) {
            $event->addInclude('followedUsers');
        }
        if ($event->isController(Controller\ListUsersController::class)
            || $event->isController(Controller\ShowUserController::class)) {
            $event->addInclude('followedBy');
        }
    }

    /**
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            //$canfollowed = !$event->model->can('notBefollowed');
            $event->attributes['followed'] = /*$canfollowed &&*/ $event->actor->followedUsers->contains($event->model);
        }

        /*if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['byobu-extend'] = true;
        }*/
    }
}
