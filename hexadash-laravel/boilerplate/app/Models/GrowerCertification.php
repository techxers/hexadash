<?php
namespace App\Models;


class GrowerCertification extends Model
{

    protected $table = 'growercertification';

    protected $primaryKey = 'GrowerCertId';

    public $timestamps = false;

    protected $fillable = [
        'CertificationId',
        'GrowerId',
        'StartDate',
        'EndDate',
        'IsValid',
        'Remarks',
        'CreatedOn',
        'Code'
    ];

    public function certification()
    {
        return $this->belongsTo(Certification::class, 'CertificationId');
    }

    public function grower()
    {
        return $this->belongsTo(Grower::class, 'GrowerId');
    }
}