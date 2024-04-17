<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{

    protected $table = 'agent';

    protected $primaryKey = 'AgentId';

    public $timestamps = false;

    protected $fillable = [
        'AgentCategoryId',
        'AgentName',
        'AgentCode',
        'CreatedOn',
        'IsActive',
        'Remarks'
    ];

    public function agentCategory()
    {
        return $this->belongsTo(AgentCategory::class, 'AgentCategoryId');
    }
}