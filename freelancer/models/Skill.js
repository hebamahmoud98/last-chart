const mongoose = require("mongoose");
const skillSchema = {
  project_worked: { type: String },
  skill_name:{type:String},
  skill_parent:{type: mongoose.Schema.Types.ObjectId,default:null},
  category_id:{type:mongoose.Schema.Types.ObjectId},
};
module.exports = mongoose.model("skills", skillSchema);
   


