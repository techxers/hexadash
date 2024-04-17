<?php
namespace App\Models;


class AuctionSale extends Model
{

    protected $table = 'auctionsale';

    protected $primaryKey = 'AuctionSaleId';

    public $timestamps = false;

    protected $fillable = [
        'SaleDate',
        'SaleNumber',
        'SaleDescription',
        'IsOpen',
        'PromptDate',
        'CreatedOn',
        'SeasonID',
        'Weight',
        'TotalLots',
        'Remarks',
        'BuyerRefferance',
        'SaleType'
    ];
}