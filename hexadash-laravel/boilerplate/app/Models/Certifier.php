<?php
namespace App\Models;


class Certifier extends Model
{

    protected $table = 'certifier';

    protected $primaryKey = 'CertifierId';

    public $timestamps = false;

    protected $fillable = [
        'CertifierCode',
        'CertifierName',
        'CreatedOn',
        'Remarks'
    ];

    protected $casts = [
        'CreatedOn' => 'datetime',
    ];
}