<?php
namespace App\Models;


class ExchangeRate extends Model
{

    protected $table = 'exchangerates';

    protected $primaryKey = 'ExchangeRateID';

    public $timestamps = false;

    protected $fillable = [
        'Rate',
        'CurrencyID',
        'FromDate',
        'Remarks',
        'CreatedOn',
        'ToDate',
        'IsActive',
    ];

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'CurrencyID');
    }
}