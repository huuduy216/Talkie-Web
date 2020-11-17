<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Foundation\Application;
use FoF\Upload\Contracts\Template;
use FoF\Upload\File;
use FoF\Upload\Helpers\Settings;

class MyTemplate implements Template
{
    public function tag(): string
    {
        return 'ImgurTemplate';
    }

    public function name(): string
    {
        return 'Imgur Template';
    }

    public function description(): string
    {
        return 'Imgur Template';
    }

    public function preview(File $file): string
    {
        return '[img]https:' . $file->url . '[/img]';
    }
}

class MyServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->app->make(Settings::class)->addRenderTemplate($this->app->make(MyTemplate::class));
    }
}

return [
    // Register extenders here to customize your forum!
	new Extend\Compat(function (Application $app) {
        $app->register(MyServiceProvider::class);
    }),
	(new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')

];
