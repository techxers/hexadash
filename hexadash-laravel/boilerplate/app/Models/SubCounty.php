<?php
namespace App\Models;


class SubCounty extends Model
{

    protected $table = 'subcounties';

    protected $primaryKey = 'SubCountyID';

    public $timestamps = false;

    protected $fillable = [
        'SubCountyName',
        'CreatedOn',
        'CountyId'
    ];

    public function county()
    {
        return $this->belongsTo(County::class, 'CountyId');
    }
}