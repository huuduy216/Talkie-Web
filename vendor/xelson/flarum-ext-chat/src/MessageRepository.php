<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat;

use Carbon\Carbon;
use Flarum\User\User;
use Flarum\Database\AbstractModel;
use Illuminate\Database\Eloquent\Builder;

class MessageRepository
{
    /**
     * Get a new query builder for the posts table.
     *
     * @return Builder
     */
    public function query()
    {
        return Message::query();
    }

    /**
     * Find a message by ID
     *
     * @param  int 		$id
     * @param  User 	$actor
     * @return Message
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findOrFail($id)
    {
        return $this->query()->findOrFail($id);
    }
    
    /**
     * Query for visible messages
     *
     * @return Builder
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function queryVisible()
    {
        return $this->query()->whereNull('deleted_by');
    }

    /**
     * Fetching visible messages by message id
     * 
     * @param  int 		$id
     * @return array
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function fetch($id)
    {
        $messages = $this->queryVisible();

        $list = $id ? 
            $messages->where('id', '<', $id)->orderBy('id', 'desc')->limit(20) 
            :
            $messages->orderBy('id', 'desc')->limit(20);

        return $list->get()->reverse();
    }
}