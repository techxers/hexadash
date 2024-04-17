<?php
namespace App\Models;


class OutturnQualityTaint extends Model
{

    protected $table = 't_outturn_quality_taint';

    protected $primaryKey = 'TaintID';

    public $timestamps = false;

    protected $fillable = [
        'OutturnMark',
        'QualityParamsID',
        'CreatedOn',
        'OutturnQualityID'
    ];

    public function qualityParameters()
    {
        return $this->belongsTo(QualityParameters::class, 'QualityParamsID');
    }

    public function outturnQuality()
    {
        return $this->belongsTo(OutturnQuality::class, 'OutturnQualityID');
    }
}