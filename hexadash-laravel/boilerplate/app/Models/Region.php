<?php
namespace App\Models;


class Region extends Model
{

    protected $table = 'regions';

    protected $primaryKey = 'RegionID';

    public $timestamps = false;

    protected $fillable = [
        'RegionName',
        'CreatedOn',
        'CountryId',
        'Remarks'
    ];

    public function country()
    {
        return $this->belongsTo(Country::class, 'CountryId');
    }
}