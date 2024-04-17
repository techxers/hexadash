<?php
namespace App\Models;
class WarrantedCoffee extends Model
{

    protected $table = 'warranted_coffee';

    protected $primaryKey = 'WarrantID';

    public $timestamps = false;

    protected $fillable = [
        'WarrantNo', 'grnOutturnID', 'WarrantedWeight', 'Status', 'CreatedOn', 'Bags', 'Pkts', 'SellableStatus', 'SaleID', 'LotNo', 'id', 'Flag', 'Percentage', 'C50KGFlag', 'WarrantType', 'TempWarrant', 'WarrantUpdateOn'
    ];
}