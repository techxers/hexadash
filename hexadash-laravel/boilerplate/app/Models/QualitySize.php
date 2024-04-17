<?php
namespace App\Models;


class Quality extends Model
{

    protected $table = 'quality';

    protected $primaryKey = 'QualityID';

    public $timestamps = false;

    protected $fillable = [
        'OutturnNo',
        'GrossWeight',
        'SampleRemoved',
        'DateSampled',
        'CreatedON',
        'StocksID',
        'SampleTypeID'
    ];

    public function stocks()
    {
        return $this->belongsTo(Stocks::class, 'StocksID', 'StocksID');
    }

    public function sampleType()
    {
        return $this->belongsTo(SampleType::class, 'SampleTypeID', 'SampleTypeID');
    }
}