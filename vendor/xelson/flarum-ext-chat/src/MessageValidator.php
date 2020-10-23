<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat;

use Flarum\Foundation\AbstractValidator;
use Flarum\Settings\SettingsRepositoryInterface;

class MessageValidator extends AbstractValidator
{
	protected function getRules()
	{
		$settings = app(SettingsRepositoryInterface::class);
		$max_chars = $settings->get('pushedx-chat.settings.charlimit');
		
		return 
		[
			'message' => 
			[
				'required',
				"max:$max_chars"
			]
		];
	}
}