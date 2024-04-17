<?php
namespace App\Models;


class Bank extends Model
{

    protected $table = 'bank';

    protected $primaryKey = 'BankId';

    public $timestamps = false;

    protected $fillable = [
        'BankName',
        'BankSwiftCode',
        'CreatedOn',
        'Remarks',
        'IsActive',
        'BankCode'
    ];
}