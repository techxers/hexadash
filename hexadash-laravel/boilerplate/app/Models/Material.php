<?php
namespace App\Models;


class Material extends Model
{

    protected $table = 'material';

    protected $primaryKey = 'MaterialID';

    public $timestamps = false;

    protected $fillable = [
        'MaterialName',
        'Description',
        'CleanOrUnmilled',
        'MbuniOrPerchment',
        'MinClassInMainCataloque',
        'CreatedOn',
        'Value',
        'MiscValue'
    ];
}