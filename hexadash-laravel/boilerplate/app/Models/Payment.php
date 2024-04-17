<?php
namespace App\Models;


class Payment extends Model
{

    protected $table = 'payments';

    protected $primaryKey = 'PaymentId';

    public $timestamps = false;

    protected $fillable = [
        'SaleID',
        'AmountToPay',
        'PayedAmount',
        'Balance',
        'TransactionReff',
        'BuyerReff',
        'PaymentDate',
        'CreatedOn',
        'CurrencyId',
        'InvoiceTypeID',
        'ModeofPayID',
        'BuyerID',
        'AmountOwed'
    ];
}