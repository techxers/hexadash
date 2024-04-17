<?php
namespace App\Models;


class Country extends Model
{

    protected $table = 'country';

    protected $primaryKey = 'CountryID';

    public $timestamps = false;

    protected $fillable = [
        'CountryName',
        'Code',
        'Remarks'
    ];
}