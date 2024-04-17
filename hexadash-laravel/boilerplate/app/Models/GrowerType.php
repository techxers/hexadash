<?php
namespace App\Models;


class GrowerType extends Model
{

    protected $table = 'growertype';

    protected $primaryKey = 'GrowerTypeId';

    public $timestamps = false;

    protected $fillable = [
        'GrowerTypeName',
        'GrowerTypeDescription',
        'CreatedOn'
    ];
}