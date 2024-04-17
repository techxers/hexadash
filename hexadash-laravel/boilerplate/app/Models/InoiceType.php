<?php
namespace App\Models;


class InvoiceType extends Model
{

    protected $table = 'invoiceype'; // the table name

    protected $primaryKey = 'InvoiceTypeID'; // the primary key

    public $timestamps = false; // if the table does not have created_at and updated_at fields

    protected $fillable = [
        'Description',
        'CreatedOn'
    ];
}