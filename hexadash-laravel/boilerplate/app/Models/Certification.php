<?php
namespace App\Models;


class Certification extends Model
{

    protected $table = 'certification';

    protected $primaryKey = 'CertificationId';

    public $timestamps = false;

    protected $fillable = [
        'CertificationName',
        'CertDescription',
        'CreatedOn',
        'StartDate',
        'EndDate',
    ];

    protected $dates = [
        'CreatedOn',
        'StartDate',
        'EndDate',
    ];
}