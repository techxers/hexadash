<?php
namespace App\Models;


class OutturnBulk extends Model
{

    protected $table = 't_outturn_bulks';

    protected $primaryKey = 'OutturnBulkID';

    public $timestamps = false;

    protected $fillable = [
        'ComputedWeight',
        'BulkFlagID',
        'BulkdDocSerial',
        'Remarks',
        'CreatedOn',
        'PreparedBy',
        'ConfirmedBy',
        'ApprovedBy',
        'EffectiveDate',
        'BulkerID',
        'ApprovedOn',
        'Weight',
        'ActualWeight',
        'Season',
        'OuttutnNo',
        'GradeID',
        'Approved',
        'SeasonID',
        'GrnOutturnId',
    ];
}