const mongoose = require("mongoose");
// import mongoose from "mongoose";
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnified: true,
    };
    try{
        mongoose.connect(process.env.DB)
        console.log('sucess');
    }catch(e){

        console.log('dfhjbfgs');
    }
}