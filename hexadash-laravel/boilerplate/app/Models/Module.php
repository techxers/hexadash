<?php
namespace App\Models;


class Module extends Model
{

    protected $table = 'modules';

    protected $primaryKey = 'ModuleId';

    public $timestamps = false;

    protected $fillable = [
        'ModuleName',
        'ModuleDescription'
    ];
}