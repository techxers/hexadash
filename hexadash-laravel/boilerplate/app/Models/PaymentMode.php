<?php
namespace App\Models;


class PaymentMode extends Model
{

    protected $table = 'paymentmode';

    protected $primaryKey = 'PayModeId';

    public $timestamps = false;

    protected $fillable = [
        'PayMode',
    ];
}