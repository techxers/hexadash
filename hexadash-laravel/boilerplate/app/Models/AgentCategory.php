<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgentCategory extends Model
{

    protected $table = 'agentcategory';

    protected $primaryKey = 'AgentCategoryId';

    public $timestamps = false;

    protected $fillable = [
        'AgentCategoryName',
        'CreatedOn',
        'Remarks'
    ];
}