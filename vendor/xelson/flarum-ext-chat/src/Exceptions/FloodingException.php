<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Exceptions;

use Exception;
use Flarum\Foundation\KnownError;

class FloodingException extends Exception implements KnownError
{
    public function getType(): string
    {
        return 'too_many_requests';
    }
}