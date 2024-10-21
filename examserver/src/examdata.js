const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Nandhu:Nandhu2004@cluster0.hursawp.mongodb.net/ExitExam");



//schema
const Schema = mongoose.Schema;
const examSchema = new Schema({
otp:Number,

});

//model creation

var examdata = mongoose.model('otp',examSchema);

module.exports = examdata;
