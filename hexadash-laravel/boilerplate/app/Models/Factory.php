<?php
namespace App\Models;


class Factory extends Model
{

    protected $table = 'factories';

    protected $primaryKey = 'FactoryID';

    public $timestamps = false;

    protected $fillable = [
        'SocietyID',
        'FactoryCode',
        'FactoryName',
        'CreatedON',
        'Remarks',
        'StartDate',
        'EndDate',
        'AccountNo',
        'BankID',
        'BranchID'
    ];

    public function bank()
    {
        return $this->belongsTo(Bank::class, 'BankID');
    }

    public function bankBranch()
    {
        return $this->belongsTo(BankBranch::class, 'BranchID');
    }

    public function coopSociety()
    {
        return $this->belongsTo(CoopSociety::class, 'SocietyID');
    }
}