<?php
namespace App\Models;


class InvoicenoTracker extends Model
{

    protected $table = 'invoicenotracker';

    protected $fillable = [
        'Sale',
        'BuyerID',
        'CreatedOn',
        'LastNumUsed',
        'InvoiceTypeID',
        'OwedAmount',
        'Currency',
        'PayedAmount',
        'TransactionRefferance',
        'CustomerRefferance',
        'TransactionDetails',
        'PaymentDate',
        'Status',
    ];

    public function invoiceType()
    {
        return $this->belongsTo(InvoiceType::class, 'InvoiceTypeID');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'Currency');
    }
}