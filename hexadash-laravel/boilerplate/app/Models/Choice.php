<?php
namespace App\Models;


class Choice extends Model
{

    protected $table = 'choice';

    protected $primaryKey = 'ID';

    public $timestamps = false;

    protected $fillable = [
        'Status',
    ];
}