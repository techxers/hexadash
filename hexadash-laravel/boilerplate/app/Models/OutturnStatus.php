<?php
namespace App\Models;


class OutturnStatus extends Model
{

    protected $table = 'outturnstatus';

    protected $primaryKey = 'OutturnStatusID';

    public $timestamps = false;

    protected $fillable = [
        'Status',
    ];
}