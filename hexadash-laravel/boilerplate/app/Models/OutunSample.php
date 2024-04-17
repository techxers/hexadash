<?php
namespace App\Models;


class OutturnSample extends Model
{

    protected $table = 'outturnsamples';

    protected $primaryKey = 'OutturnsampleID';

    public $timestamps = false;

    protected $fillable = [
        'Weight',
        'Description',
        'SampleTypeID',
        'OutturnID',
        'SampleDate',
        'SampledBy',
        'MaterialID',
        'OutturnNo',
        'OutturnSeasonID',
        'CreatedOn',
        'OutturnMark'
    ];

    public function material()
    {
        return $this->belongsTo(Material::class, 'MaterialID');
    }

    public function coffeeSeason()
    {
        return $this->belongsTo(CoffeeSeason::class, 'OutturnSeasonID');
    }

    public function sampleType()
    {
        return $this->belongsTo(SampleType::class, 'SampleTypeID');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'SampledBy');
    }
}