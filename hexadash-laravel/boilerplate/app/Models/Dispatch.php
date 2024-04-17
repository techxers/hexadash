<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispatch extends Model
{
    

    protected $table = 'dispatch';

    protected $primaryKey = 'DIspatchID';

    public $timestamps = false;

    protected $fillable = [
        'WarrantNo',
        'SaleID',
        'PaymentID',
        'Description',
        'DIspathedBy',
        'ApprovedBy',
        'Bags',
        'Pkts',
        'Weight',
        'DispatchDate',
        'CreatedOn',
        'Remarks',
        'SeasonID',
        'BuyerID'
    ];
}
