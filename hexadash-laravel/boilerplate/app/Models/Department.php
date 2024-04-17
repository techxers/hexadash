<?php
namespace App\Models;


class Department extends Model
{

    protected $table = 'departments';

    protected $primaryKey = 'DepartmentId';

    public $timestamps = false;

    protected $fillable = [
        'DepartmentName',
        'CreatedOn'
    ];
}