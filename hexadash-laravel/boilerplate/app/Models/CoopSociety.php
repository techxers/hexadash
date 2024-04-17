<?php
namespace App\Models;


class CoopSociety extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        // Add your column names here that can be filled in mass assignment
        // 'name', 'description', etc.
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // Add your column names here that should be hidden when this model is converted to an array or JSON
        // 'password', etc.
    ];
}