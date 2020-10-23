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

class Message extends AbstractModel
{
    protected $table = 'pushedx_messages';

    protected $dates = ['created_at', 'edited_at'];

    /**
     * Create a new message.
     *
     * @param string    $message
     * @param int       $actorId
     * @param Carbon    $created_at
     * @param Carbon    $edited_at
     * @param int       $deleted_by
     * 
     */
    public static function build($message, $actorId, $created_at, $edited_at = null, $deleted_by = null)
    {
        $msg = new static;

        $msg->message = $message;
        $msg->actorId = $actorId;
        $msg->created_at = $created_at;
        $msg->edited_at = $edited_at;
        $msg->deleted_by = $deleted_by;

        return $msg;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function actor()
    {
        return $this->belongsTo(User::class, 'actorId');
    }
}
