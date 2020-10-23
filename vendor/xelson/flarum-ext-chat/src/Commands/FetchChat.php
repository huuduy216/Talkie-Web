<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Commands;

use Flarum\User\User;

class FetchChat
{
    /**
     * The chat message ID
     *
     * @var int
     */
    public $id;

    /**
     * @param int     $id
     */
    public function __construct($id)
    {
        $this->id = $id;
    }
}
