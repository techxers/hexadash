<?php
namespace App\Models;


class GrowerAccountType extends Model
{

    protected $table = 'groweraccounttype';

    protected $primaryKey = 'AccountTypeId';

    public $timestamps = false;

    protected $fillable = [
        'AccountName',
        'AccountDescription',
        'DefaultCurrencyId'
    ];

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'DefaultCurrencyId', 'CurrencyId');
    }
}