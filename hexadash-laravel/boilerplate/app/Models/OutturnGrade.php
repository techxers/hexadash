<?php
namespace App\Models;


class OutturnGrade extends Model
{

    protected $table = 'outturngrades';

    protected $primaryKey = 'OutturnGradesID';

    public $timestamps = false;

    protected $fillable = [
        'OutturnMark',
        'Bags',
        'Pkts',
        'Weight',
        'MillerClass',
        'CleanBulk',
        'CreatedOn',
        'MaterialID',
        'WeightPercentage',
        'MaClass',
        'BulkOutturnNo',
        'BulkGroupID',
        'SeasonID',
        'OutturnQualityID',
        'PercentageOfGradeBulk',
        'OutturnGradesFk',
        'OutturnID'
    ];
}