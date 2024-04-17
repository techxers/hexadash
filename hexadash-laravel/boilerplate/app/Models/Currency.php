<?php
namespace App\Models;


class Currency extends Model
{

    protected $table = 'currency';

    protected $primaryKey = 'CurrencyId';

    public $timestamps = false;

    protected $fillable = [
        'CurrencyName',
        'CurrencySymbol',
        'Description',
        'CreatedOn'
    ];
}