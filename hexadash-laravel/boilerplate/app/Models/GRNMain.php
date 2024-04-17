<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GRNMain extends Model
{
    

    protected $table = 'grn_main';

    protected $primaryKey = 'grnID';

    public $timestamps = false; // Since CreatedOn is defined

    protected $fillable = ['documentSerial', 'DeliveryDate', 'VehiclePlate', 'GrossWeight', 'PermitNo', 'TareWeight', 'grnNo', 'WeighBridgeNo', 'DriverName', 'DriverIDNo', 'SeasonID', 'WarehouseID', 'GrowerID', 'SupervisorID', 'WHManager', 'IsVerified', 'MillerID', 'Remarks', 'GrowerWeight', 'WarrantNo', 'NetWeight', 'CoffeeTypeId', 'CreatedOn', 'RequiresStandardization', 'standardized'];

    // protected $casts = [
    //     'DeliveryDate' => 'datetime',
    //     'GrossWeight' => 'decimal:10,0',
    //     'TareWeight' => 'decimal:10,0',
    //     'IsVerified' => 'boolean',
    //     'RequiresStandardization' => 'boolean',
    //     'standardized' => 'char',
    // ];

    // Define relationships based on foreign key constraints
    public function season()
    {
        return $this->belongsTo(CoffeeSeason::class, 'SeasonID');
    }

    public function warehouse()
    {
        return $this->belongsTo(Agent::class, 'WarehouseID');
    }

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'SupervisorID');
    }

    public function whManager()
    {
        return $this->belongsTo(User::class, 'WHManager');
    }

    public function miller()
    {
        return $this->belongsTo(Agent::class, 'MillerID');
    }

    public function grower()
    {
        return $this->belongsTo(Grower::class, 'GrowerID');
    }

    public function coffeeType()
    {
        return $this->belongsTo(CleanType::class, 'CoffeeTypeId');
    }

    // Add other methods as needed
}
