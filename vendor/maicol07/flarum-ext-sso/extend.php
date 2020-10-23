<?php

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use Maicol07\SSO\Listener;
use FoF\Components\Extend\AddFofComponents;

return [
	new AddFofComponents(),

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddLogoutRedirect::class);
        $events->subscribe(Listener\ActivateUser::class);
        $events->subscribe(Listener\LoadSettingsFromDatabase::class);
    },

    new Extend\Locales(__DIR__ . '/locale'),
];
