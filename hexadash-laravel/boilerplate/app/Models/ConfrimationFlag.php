<?php
namespace App\Models;


class ConfirmationFlag extends Model
{

    protected $table = 'confrimationflag';

    protected $primaryKey = 'FlagID';

    public $timestamps = false;

    protected $fillable = [
        'Description',
        'CreatedOn'
    ];
}