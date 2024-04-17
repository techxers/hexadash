<?php
namespace App\Models;


class SampleType extends Model
{

    protected $table = 'sampletypes';

    protected $primaryKey = 'SampleTypesID';

    public $timestamps = false;

    protected $fillable = [
        'SampleTypesName',
        'Description',
        'CreatedOn'
    ];

    protected $casts = [
        'CreatedOn' => 'datetime',
    ];
}