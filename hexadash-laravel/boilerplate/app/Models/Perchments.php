<?php
namespace App\Models;


class Perchments extends Model
{

    protected $table = 'perchments';

    protected $primaryKey = 'PerchmentID';

    public $timestamps = false;

    protected $fillable = [
        'DateDeliverd',
        'PerchmentType',
        'Bags',
        'GrossKG',
        'NetKG',
        'Outturn',
        'MilledInPerchBulk',
        'Remarks',
        'CreatedOn'
    ];
}