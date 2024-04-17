<?php
namespace App\Models;


class SaleStatus extends Model
{

    protected $table = 'salestatus';

    protected $primaryKey = 'SaleStatusId';

    public $timestamps = false;

    protected $fillable = [
        'StatusName',
        'StatusDescription'
    ];
}