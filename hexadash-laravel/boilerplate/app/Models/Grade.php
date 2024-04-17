<?php
namespace App\Models;


class Grade extends Model
{

    protected $table = 'grades';

    protected $primaryKey = 'GradeID';

    public $timestamps = false;

    protected $fillable = [
        'Grade',
        'CreatedON',
        'Remarks'
    ];
}