<?php
namespace App\Models;


class QualityClass extends Model
{

    protected $table = 'qualityclass';

    protected $primaryKey = 'classID';

    public $timestamps = false;

    protected $fillable = [
        'Class',
        'Value',
    ];
}