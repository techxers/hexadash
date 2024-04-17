<?php
namespace App\Models;


class PostalCode extends Model
{

    protected $table = 'postalcode';

    protected $primaryKey = 'PostalID';

    public $timestamps = false;

    protected $fillable = [
        'CountyID',
        'PostCode',
        'Town',
        'Status'
    ];
}