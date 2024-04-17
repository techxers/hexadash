<?php

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionsStage extends Model
{

    protected $table = 'transactionstages';

    protected $primaryKey = 'Id';

    public $timestamps = false;

    protected $fillable = [
        'TransactionStageName',
    ];
}