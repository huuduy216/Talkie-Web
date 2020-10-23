<?php

namespace FoF\Sitemap\Resources;

use Carbon\Carbon;
use Flarum\Discussion\Discussion as Model;
use Flarum\User\Guest;
use FoF\Sitemap\Sitemap\Frequency;
use Illuminate\Database\Eloquent\Builder;

class Discussion extends Resource
{
    public function query(): Builder
    {
        return Model::whereVisibleTo(new Guest());
    }

    public function url($model): string
    {
        return $this->generateUrl('d/' . $model->id . (trim($model->slug) ? '-' . $model->slug : ''));
    }

    public function priority(): float
    {
        return 0.7;
    }

    public function frequency(): string
    {
        return Frequency::DAILY;
    }

    public function lastModifiedAt($model): Carbon
    {
        return $model->last_posted_at;
    }
}
