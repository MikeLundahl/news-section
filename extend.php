<?php

/*
 * This file is part of mbl/news-section.
 *
 * Copyright (c) 2023 Mike Lundahl.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Mbl\NewsSection;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings())
        ->serializeToForum('isActive', 'mbl-news-section.is-active')
        ->serializeToForum('url', 'mbl-news-section.url')
        ->serializeToForum('apiKey', 'mbl-news-section.api-key'),
    (new Extend\Routes('api'))
        ->get('/newsEngine', 'newsEngine.index', controllers\NewsEngineController::class)

];
