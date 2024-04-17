<?php
namespace App\Models;


class PerchmenTtype extends Model
{

    protected $table = 'perchmenttype';

    protected $primaryKey = 'pTypeID';

    public $timestamps = false;

    protected $fillable = [
        'Types',
        'Description',
        'CreatedOn',
        'Remarks'
    ];
}