<?php
namespace App\Models;


class BulkNumberTracker extends Model
{

    protected $table = 'bulknumbertracker';

    protected $primaryKey = 'Id';

    public $timestamps = false;

    protected $fillable = [
        'LastUsedNumber',
        'CreatedOn',
        'BulkRefCode',
        'OutturnNo',
        'HasReset'
    ];
}