const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const posswordComplexity = require("joi-password-complexity"); 
 
const userSchema =  new mongoose.Schema({
    firstname:{type:String, required: true},
    lastname:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id : this.id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
    return token
}

const User =  mongoose.model('user',userSchema);

const validate = (data) =>{
    const Schema = joi.object({
        firstname: joi.string().required().label("First Name"),
        lastname: joi.string().required().label("Last Name"),
        email: joi.string().email().required().label("Email"),
        password: posswordComplexity().required().label("Password"),
    });
    return Schema.validate(data);
};

module.exports = {User, validate}