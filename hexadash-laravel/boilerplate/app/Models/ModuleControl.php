<?php
namespace App\Models;


class ModuleControl extends Model
{

    protected $table = 'modulecontrols';

    protected $primaryKey = 'MControlId';

    public $timestamps = false;

    protected $fillable = [
        'MControlName',
        'ModuleId'
    ];

    public function module()
    {
        return $this->belongsTo(Module::class, 'ModuleId', 'ModuleId');
    }
}