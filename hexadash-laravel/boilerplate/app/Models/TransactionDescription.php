<?php



class TransactionDescription extends Model
{

    protected $table = 'transactiondescription';

    protected $primaryKey = 'Id';

    public $timestamps = false;

    protected $fillable = [
        'Description',
    ];
}