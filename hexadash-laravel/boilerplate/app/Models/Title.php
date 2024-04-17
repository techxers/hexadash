<?php
namespace App\Models;


class Title extends Model
{

    protected $table = 'titles';

    protected $primaryKey = 'TitleID';

    public $timestamps = false;

    protected $fillable = [
        'Title',
        'CreatedOn',
        'Remarks'
    ];
}