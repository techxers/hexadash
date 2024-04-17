<?php
namespace App\Models;


class AgentsInfomation extends Model
{

    protected $table = 'agentsinfomation';

    protected $primaryKey = 'AgentsInfomationID';

    public $timestamps = false;

    protected $fillable = [
        'BusinessLocation',
        'BoxOfficeNo',
        'PrimaryMobile',
        'Mobile',
        'PrimaryLandline',
        'LandLine',
        'PhoneNumber',
        'FaxNo',
        'PrimaryEmailAddress',
        'SecondaryEmailAdress',
        'ContactPerson',
        'AgentID',
        'BoxCode',
        'CreatedOn'
    ];

    public function agent()
    {
        return $this->belongsTo(Agent::class, 'AgentID');
    }

    public function county()
    {
        return $this->belongsTo(County::class, 'BusinessLocation');
    }
}