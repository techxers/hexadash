<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class TrackReoffer extends Model
{

    protected $table = 'track_reoffer';

    protected $primaryKey = 'ReOfferID';

    public $timestamps = false;

    protected $fillable = [
        'KgsDeducted',
        'Note',
        'SaleID',
        'CreatedOn',
        'OldWeight',
        'NewWeight',
        'grnOutturnID',
    ];

    protected $casts = [
        'KgsDeducted' => 'decimal:2',
        'OldWeight' => 'decimal:2',
        'NewWeight' => 'decimal:2',
    ];
}