<?php
namespace App\Models;


class BulkThreshold extends Model
{

    protected $table = 'bulk_threshold';

    protected $primaryKey = 'ThresholdID';

    public $timestamps = false;

    protected $fillable = [
        'thresholdValue',
        'IsActive',
        'CreatedOn'
    ];

    protected $casts = [
        'IsActive' => 'boolean',
        'CreatedOn' => 'datetime',
    ];
}