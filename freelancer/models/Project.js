const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  projectName: { type: String ,required:true,minLength:10},
  budget: { type: Number },
  description:{type:String,required:true,minLength:30},
  state:{type:String, default:"pending"},
  user_id:{type:mongoose.Schema.Types.ObjectId}

},{timestamps:true});
module.exports = mongoose.model("Project", ProjectSchema);
