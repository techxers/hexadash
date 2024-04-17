<?php
namespace App\Models;


class Chargetypes extends Model
{

    protected $table = 'chargetypes';

    protected $primaryKey = 'ChargeTypeID';

    public $timestamps = false;

    protected $fillable = [
        'ChargeTypeDescription',
        'CreatedOn',
        'Remarks'
    ];
}