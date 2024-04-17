<?php
namespace App\Models;


class Outturn extends Model
{

    protected $table = 'outturns';

    protected $primaryKey = 'OutturnID';

    public $timestamps = false;

    protected $fillable = [
        'OutturnMark',
        'OutturnNo',
        'MaterialID',
        'GrowerID',
        'MillerID',
        'CoffeeTypeID',
        'BagID',
        'BagWeight',
        'Nweight',
        'Status',
        'TotalMillerCharges',
        'TotalChargesRecovered',
        'TotalWeightSold',
        'GrowerPayee',
        'CreatedOn',
        'SeasonID',
        'MilledDate',
        'WeightMargin',
        'Pkts',
        'MillerClassID',
        'Remarks',
        'Bags',
        'Sign',
        'DeliveryDate',
        'BulkOutturnNo',
        'GrossPWeight',
        'Sampled',
        'BulkPercentage',
        'GrnReceivediD',
    ];
}