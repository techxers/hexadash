<?php
namespace App\Models;


class GrowerAccount extends Model
{

    protected $table = 'groweraccounts';

    protected $primaryKey = 'GrowerAccountId';

    public $timestamps = false;

    protected $fillable = [
        'AccountTypeId',
        'GrowerId',
        'DateCreated',
        'CurrencyId',
        'IsActive',
    ];

    public function accountType()
    {
        return $this->belongsTo(GrowerAccountType::class, 'AccountTypeId');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'CurrencyId');
    }
}