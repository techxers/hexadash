<?php
namespace App\Models;


class QualityParameter extends Model
{

    protected $table = 'qualityparameters';

    protected $primaryKey = 'QualityParamsID';

    public $timestamps = false;

    protected $fillable = [
        'Parameter',
        'Description',
        'QualityGroupID',
        'CreatedOn'
    ];

    public function qualityGroup()
    {
        return $this->belongsTo(QualityGroup::class, 'QualityGroupID');
    }
}