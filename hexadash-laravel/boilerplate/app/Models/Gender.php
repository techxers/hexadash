<?php
namespace App\Models;


class Gender extends Model
{

    protected $table = 'gender';

    protected $primaryKey = 'GenderID';

    public $timestamps = false;

    protected $fillable = [
        'GenderName',
        'GenderChar',
        'CreatedOn',
        'Remarks'
    ];
}