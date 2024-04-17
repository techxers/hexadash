<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;


class Grower extends Model
{

    protected $table = 'grower';

    protected $primaryKey = 'GrowerId';

    public $timestamps = false;

    protected $fillable = [
        'GrowerName', 'OrganisationName', 'GrowerCode', 'GrowerMark', 'GrowerPin', 'GrowerEmail', 'GrowerMobile',
        'GrowerPostalAdress', 'GrowerLandline', 'GrowerVATnumber', 'GrowerPhysicalAdress', 'DateRegistered',
        'SubCountyId', 'IsActive', 'GrowerTypeId', 'AppTransactionId', 'GrowerPostalTown', 'CountyID', 'RegionID',
        'CountryID', 'BulkMyCoffee', 'GrowerPostCode', 'FactoryID', 'CreatedOn', 'MgtCommision', 'Cert'
    ];
}