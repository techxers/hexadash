<?php
namespace App\Models;


class SaleType extends Model
{

    protected $table = 'saletype';

    protected $primaryKey = 'SaleTypeID';

    public $timestamps = false;

    protected $fillable = [
        'SaleType',
        'CreatedOn'
    ];
}