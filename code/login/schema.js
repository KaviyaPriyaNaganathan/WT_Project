const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    cid: Number,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
      city:String,
      state: String,
      zip: Number,
      country: String,
    phonenumber:Number,

});


const ContactSchema= new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
});

const OrderSchema=new mongoose.Schema({
  productname:String,
  quantity:Number,
});

module.exports.Customers=mongoose.model("Customers",CustomerSchema);
module.exports.contact=mongoose.model("contact",ContactSchema);
module.exports.order=mongoose.model("order",OrderSchema);
