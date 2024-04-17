<?php
namespace App\Models;


class BankBranch extends Model
{

    protected $table = 'bankbranch';

    protected $primaryKey = 'BranchId';

    public $incrementing = false;

    protected $fillable = [
        'BankId',
        'BranchName',
        'BranchSwiftCode',
        'Remarks',
        'Status',
        'BranchCode'
    ];

    public function bank()
    {
        return $this->belongsTo(Bank::class, 'BankId');
    }
}