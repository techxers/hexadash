<?php
namespace App\Models;


class QualityGreenDefects extends Model
{

    protected $table = 'qualitygreendefects';

    protected $primaryKey = 'GreenDefectsID';

    public $timestamps = false;

    protected $fillable = [
        'DefeceID',
        'CreatedOn'
    ];

    public function qualityParameters()
    {
        return $this->belongsTo(QualityParameters::class, 'DefeceID');
    }
}