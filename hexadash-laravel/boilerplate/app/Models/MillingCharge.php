<?php
namespace App\Models;


class MillingCharge extends Model
{

    protected $table = 'millercharges';

    protected $primaryKey = 'MillerChargeID';

    public $timestamps = false;

    protected $fillable = [
        'ChargeTypeID',
        'OutturnMark',
        'OutturnSeason',
        'ChargeAmount',
        'Currency',
        'ChargeRecovered',
        'FullyRecovered',
        'CreatedON',
        'Remarks',
        'VAT',
        'Total',
        'OutturnID',
        'Balance'
    ];

    public function outturn()
    {
        return $this->belongsTo(Outturn::class, 'OutturnID');
    }

    public function chargeType()
    {
        return $this->belongsTo(ChargeType::class, 'ChargeTypeID');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'Currency');
    }
}