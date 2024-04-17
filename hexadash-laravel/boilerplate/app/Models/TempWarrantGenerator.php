<?php
namespace App\Models;


class TempWarrantGenerator extends Model
{

    protected $table = 'temp_warrant_generator';

    protected $primaryKey = 'TempWarranrId';

    public $timestamps = false;

    protected $fillable = [
        'TempWarrantNo',
        'CreatedOn'
    ];
}