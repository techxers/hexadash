<?php
namespace App\Models;


class DeliveryLogs extends Model
{

    protected $table = 'deliverylogs';

    protected $primaryKey = 'deliveryLogsID';

    public $timestamps = false;

    protected $fillable = [
        'StocksID',
        'ReceivedDate',
        'CheckedBy',
        'ApprovedBy',
        'Driver',
        'Escort',
        'VehicleRegistration',
        'PermitNo',
        'GRN',
        'CreatedOn'
    ];

    public function approvedBy()
    {
        return $this->belongsTo(User::class, 'ApprovedBy', 'UserId');
    }

    public function checkedBy()
    {
        return $this->belongsTo(User::class, 'CheckedBy', 'UserId');
    }

    public function stocks()
    {
        return $this->belongsTo(Stocks::class, 'StocksID', 'StocksID');
    }
}