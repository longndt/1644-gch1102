const mongoose = require('mongoose')

var BookSchema = mongoose.Schema ( 
  {
     title : String,
     author: String,
     genre : String,
     price : Number,
     cover : String,
     publisher: String,
     video : String,
     quantity: Number
  }
);

const BookModel = mongoose.model("SACH", BookSchema, "book");
//book : tên collection

module.exports = BookModel;