<?php
namespace App\Models;


class OutturnQualityRoastdefect extends Model
{

    protected $table = 't_outturn_quality_roastdefects';

    protected $primaryKey = 'RoastDefectsID';

    public $timestamps = false;

    protected $fillable = [
        'OutturnMark',
        'QualityParamsID',
        'CreatedOn',
        'OutturnQualityID'
    ];

    public function outturnQuality()
    {
        return $this->belongsTo(OutturnQuality::class, 'OutturnQualityID');
    }

    public function qualityParameter()
    {
        return $this->belongsTo(QualityParameter::class, 'QualityParamsID');
    }
}