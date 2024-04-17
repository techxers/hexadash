<?php
namespace App\Models;


class ContactPerson extends Model
{

    protected $table = 'contactperson';

    protected $primaryKey = 'ContactId';

    public $timestamps = false;

    protected $fillable = [
        'GrowerId',
        'ContactName',
        'ContactNumber',
        'Remarks',
        'IsMainContact',
        'CreatedOn',
        'ContactTitleID'
    ];

    public function grower()
    {
        return $this->belongsTo(Grower::class, 'GrowerId');
    }

    public function title()
    {
        return $this->belongsTo(Title::class, 'ContactTitleID');
    }
}