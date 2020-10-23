<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat;
use Flarum\Settings\SettingsRepositoryInterface;
use Pusher;

class PusherWrapper
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;
    
    /**
     * @param SettingsRepositoryInterface $settings
     */
	public function __construct(SettingsRepositoryInterface $settings)
	{
		$this->pusher = new Pusher(
            $settings->get('flarum-pusher.app_key'),
            $settings->get('flarum-pusher.app_secret'),
            $settings->get('flarum-pusher.app_id'),
            ['cluster' => $settings->get('flarum-pusher.app_cluster')]
        );
	}

    /**
	 * Pseudo for pusher instance
	 * 
     * @return Pusher
     */
	public function pusher()
	{
		return $this->pusher;
	}
}