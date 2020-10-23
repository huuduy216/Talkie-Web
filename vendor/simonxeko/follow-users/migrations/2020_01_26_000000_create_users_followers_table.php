<?php

/*
 * This file is part of fof/follow-tags.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;


return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('users_followers')) {
            return;
        }

        $schema->create(
            'users_followers',
            function (Blueprint $table) {
                $table->integer('user_id')->unsigned();
                $table->integer('followed_user_id')->unsigned();

                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

                $table->foreign('followed_user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

                $table->primary(['user_id', 'followed_user_id']);
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('users_followers');
    },
];