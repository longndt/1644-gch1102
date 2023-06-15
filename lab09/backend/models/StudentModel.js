var mongoose = require ('mongoose')
var StudentSchema = mongoose.Schema(
   {
      full_name : String,
      birth_year : Number,
      email : String,
      grade: {
         type: Number,
         min: 0,
         max: 10
      },
      gender : String,
      image : String
   }
);
var StudentModel = mongoose.model("sinh vien", StudentSchema, "student");
module.exports = StudentModel;