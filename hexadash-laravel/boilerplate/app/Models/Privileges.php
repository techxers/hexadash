<?php
namespace App\Models;


class Privilege extends Model
{

    protected $table = 'privileges';

    protected $primaryKey = 'PrivilegeId';

    public $timestamps = false;

    protected $fillable = [
        'UserId',
        'MControlId',
        'IsPrivileged',
        'DateUpdated'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'UserId');
    }

    public function moduleControl()
    {
        return $this->belongsTo(ModuleControl::class, 'MControlId', 'MControlId');
    }
}