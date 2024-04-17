<?php
namespace App\Models;


class Standardization extends Model
{

    protected $table = 'standardization';

    protected $primaryKey = 'StandardizationID';

    public $timestamps = false;

    protected $fillable = [
        'GrnID',
        'GrossWeight',
        'NetWeight',
        'TareWeight',
        'Bags',
        'Pkts',
        'WhoToCharge',
        'Date',
        'PreparedBy',
        'ConfirmedBy',
        'CreatedOn',
        'DocumentSerial',
        'BagType',
        'grnOutturnID',
        'Comments'
    ];

    public function grnMain()
    {
        return $this->belongsTo(GrnMain::class, 'GrnID');
    }

    public function preparedByUser()
    {
        return $this->belongsTo(User::class, 'PreparedBy');
    }

    public function confirmedByUser()
    {
        return $this->belongsTo(User::class, 'ConfirmedBy');
    }
}