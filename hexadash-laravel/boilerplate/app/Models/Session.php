<?php
namespace App\Models;


class Session extends Model
{

    protected $table = 'session';

    protected $primaryKey = 'SessionId';

    public $timestamps = false;

    protected $fillable = [
        'UserId',
        'SessionCode',
        'StartTime',
        'EndTime',
        'IsActive',
        'LastRequestTime',
        'Note'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'UserId');
    }
}