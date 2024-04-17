<?php
namespace App\Models;


class OutturnCertification extends Model
{

    protected $table = 'outturncertification';

    protected $primaryKey = ['ID', 'OutturnMark', 'GrowerCertId'];

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'ID',
        'OutturnMark',
        'GrowerCertId',
        'CreatedOn',
        'ActiveStatus',
        'OutturnID',
    ];

    public function growerCertification()
    {
        return $this->belongsTo(GrowerCertification::class, 'GrowerCertId');
    }

    public function outturn()
    {
        return $this->belongsTo(Outturn::class, 'OutturnID');
    }
}