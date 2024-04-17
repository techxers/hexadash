<?php
namespace App\Models;


class Stock extends Model
{

    protected $table = 'stocks';

    protected $primaryKey = 'StocksID';

    public $timestamps = false;

    protected $fillable = [
        'cleanTypeID',
        'OutturnNo',
        'Bags',
        'GrossWeight',
        'Pkts',
        'receivedDate',
        'ReceivedBy',
        'PartialDelivery',
        'CreatedON',
        'weightOfBags',
        'millingLoss',
        'pTypeID',
        'classID',
        'warehouseID',
        'GradeID',
        'SeasonID',
        'WLocationID',
        'GrowerRefferance',
        'TypeOfBag',
        'MillerID',
        'Moisture',
        'StockIDLink'
    ];
}