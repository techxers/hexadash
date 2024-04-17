<?php
namespace App\Models;


class RegionCounty extends Model
{

    protected $table = 'regioncounty';

    protected $primaryKey = ['CountyID', 'RegionID'];

    public $incrementing = false;

    protected $fillable = [
        'CountyID',
        'RegionID'
    ];

    public function country()
    {
        return $this->belongsTo(Country::class, 'CountyID', 'CountryID');
    }

    public function region()
    {
        return $this->belongsTo(Region::class, 'RegionID', 'RegionID');
    }
}