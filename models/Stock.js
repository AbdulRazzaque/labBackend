const mongoose = require("mongoose")

const stockScheme = new mongoose.Schema({
    name:{type:String,default:"",required:true},
    product:{type:mongoose.Types.ObjectId,ref:"Product"},
    totalQuantity:{type:Number,default:0, required:true},
    expiryArray:[],
    stockIn:[{type:mongoose.Types.ObjectId,ref:"StockIn"}],
    stockOut:[{type:mongoose.Types.ObjectId,ref:"StockOut"}]
},{timestamps:true})

const Stock = new mongoose.model("Stock",stockScheme)
module.exports = Stock;