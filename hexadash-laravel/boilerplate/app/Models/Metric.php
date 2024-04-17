<?php
namespace App\Models;


class Metric extends Model
{

    protected $table = 'metrics';

    protected $primaryKey = 'MetricId';

    public $timestamps = false;

    protected $fillable = [
        'MetricName',
        'MetricSymbol'
    ];
}