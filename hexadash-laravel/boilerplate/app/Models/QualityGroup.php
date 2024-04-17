<?php
namespace App\Models;


class QualityGroup extends Model
{

    protected $table = 'qualitygroups';

    protected $primaryKey = 'QualityGroupID';

    public $timestamps = false;

    protected $fillable = [
        'GroupName',
        'Remarks',
        'CreatedOn'
    ];
}