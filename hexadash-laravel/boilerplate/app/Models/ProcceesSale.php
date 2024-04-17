<?php
namespace App\Models;


class ProcceesSale extends Model
{

    protected $table = 'procceessale';

    protected $primaryKey = 'ProcceedSaleID';

    public $timestamps = false;

    protected $fillable = [
        'PoccesDate',
        'SeasonID',
        'SaleID',
        'CreateOn'
    ];
}