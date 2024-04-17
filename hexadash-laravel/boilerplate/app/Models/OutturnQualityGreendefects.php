<?php
namespace App\Models;


class OutturnQualityGreendefects extends Model
{

    protected $table = 't_outturn_quality_greendefects';

    protected $primaryKey = 'GreenDefectsID';

    public $timestamps = false;

    protected $fillable = [
        'QualityParamsID',
        'OutturnMark',
        'CreatedOn',
        'OutturnQualityID'
    ];

    public function outturnQuality()
    {
        return $this->belongsTo(OutturnQuality::class, 'OutturnQualityID');
    }

    public function qualityParameters()
    {
        return $this->belongsTo(QualityParameters::class, 'QualityParamsID');
    }
}