<?php
namespace App\Models;
class WarrantType extends Model
{

    protected $table = 'warrant_type';

    protected $primaryKey = 'warrant_type_id';

    public $timestamps = false;

    protected $fillable = [
        'warrant_type',
        'CreatedOn'
    ];
}