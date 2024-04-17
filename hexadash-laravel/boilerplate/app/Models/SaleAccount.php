<?php
namespace App\Models;


class SaleAccount extends Model
{

    protected $table = 'salesaccount';

    protected $primaryKey = 'Id';

    public $timestamps = false;

    protected $fillable = [
        'SaleDetailsId',
        'AmountPercentage',
        'Amount',
        'NetAmount',
        'AppTransactionId',
    ];

    public function saleDetails()
    {
        return $this->belongsTo(SaleDetails::class, 'SaleDetailsId', 'Id');
    }

    public function appTransaction()
    {
        return $this->belongsTo(AppTransaction::class, 'AppTransactionId', 'AppTransactionId');
    }
}