<?php
namespace App\Models;


class TrackPartialDeliverie extends Model
{

    protected $table = 'track_partial_deliveries';

    protected $primaryKey = 'PartialDeliveryID';

    public $timestamps = false;

    protected $fillable = [
        'OutturnNo',
        'GrnID',
        'GrnNo',
        'Weight',
        'UniqueID',
        'CreatedOn',
        'DeliveryDate'
    ];
}