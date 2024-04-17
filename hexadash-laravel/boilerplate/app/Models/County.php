<?php
namespace App\Models;


class County extends Model
{

    protected $table = 'county';

    protected $primaryKey = 'CountyID';

    public $timestamps = false;

    protected $fillable = [
        'CountryID',
        'CountyName',
        'RegionID',
        'CreatedOn'
    ];

    public function country()
    {
        return $this->belongsTo(Country::class, 'CountryID');
    }

    public function region()
    {
        return $this->belongsTo(Region::class, 'RegionID');
    }
}