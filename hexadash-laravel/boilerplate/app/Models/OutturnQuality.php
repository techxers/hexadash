<?php
namespace App\Models;


class OutturnQuality extends Model
{

    protected $table = 'outturnquality';

    protected $primaryKey = 'OutturnQualityID';

    public $timestamps = false;

    protected $fillable = [
        'greenSizeID', 'greenColourID', 'greenDefectsID', 'roastTypeID', 'roastCentreTypeID', 'RoastDefectsID', 'cupAcidityID', 'cupBodyID', 'cupTaintID', 'cupAromaID', 'cupQuality', 'overalGreenQuality', 'overalRoastQuality', 'overalCupQuality', 'OutturnID', 'CreatedOn', 'CuppedBy', 'ConfirmedBy', 'EffectiveDate', 'OutturnMark', 'FinalComments', 'Serial'
    ];
}