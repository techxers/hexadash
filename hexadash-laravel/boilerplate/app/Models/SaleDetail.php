<?php
namespace App\Models;


class SaleDetail extends Model
{

    protected $table = 'saledetails';

    protected $primaryKey = 'Id';

    public $timestamps = false;

    protected $fillable = [
        'AuctionSaleId',
        'OutturnGradeId',
        'SaleStatusId',
        'BuyerID',
        'SaleAmount',
        'CurrencyId',
        'Remarks',
        'CreatedOn',
        'LotNo',
        'Status',
        'ReservedPrice',
        'Id2',
        'WeightSold',
        'TotalAmount',
        'SaleType',
        'WarrantID',
        'Bags',
        'Pkts'
    ];
}