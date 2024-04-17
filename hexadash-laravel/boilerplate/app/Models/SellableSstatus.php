<?php
namespace App\Models;


class SellableStatus extends Model
{

    protected $table = 't_sellable_status';

    protected $primaryKey = 'SellableStatusID';

    public $timestamps = false;

    protected $fillable = [
        'Status',
        'Description',
        'Symbol',
        'CreatedOn'
    ];
}