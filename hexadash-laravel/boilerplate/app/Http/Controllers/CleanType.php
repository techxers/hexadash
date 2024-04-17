<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;



class CleanType extends Model
{

    protected $table = 'cleantype';

    protected $primaryKey = 'cleanTypeID';

    public $timestamps = false;

    protected $fillable = [
        'Description',
        'CreatedOn',
        'Remarks',
        'CoffeeType',
    ];

    protected $dates = [
        'CreatedOn',
    ];
}