<?php
namespace App\Models;


class GrowerAgent extends Model
{

    protected $table = 'groweragents';

    protected $primaryKey = 'GrowerAgentId';

    public $timestamps = false;

    protected $fillable = [
        'GrowerId',
        'AgentId',
        'StartDate',
        'EndDate',
        'GrowerAgentCommision',
        'CreatedOn',
        'IsActive',
    ];

    public function agent()
    {
        return $this->belongsTo(Agent::class, 'AgentId');
    }

    public function grower()
    {
        return $this->belongsTo(Grower::class, 'GrowerId');
    }
}