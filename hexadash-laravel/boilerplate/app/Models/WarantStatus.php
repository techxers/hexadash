<?php
namespace App\Models;
class WarantStatus extends Model
{

    protected $table = 'warantstatus';

    protected $primaryKey = 'WarantStatusID';

    public $timestamps = false;

    protected $fillable = [
        'WarantStatus',
        'Description',
        'CreatedOn',
    ];

    protected $dates = [
        'CreatedOn',
    ];
}