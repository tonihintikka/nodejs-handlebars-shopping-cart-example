const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');

const userSchema = new Schema({
email: {type: String, required:true},

password: {type: String, required:true}


});
userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(passport, bcrypt.genSaltSync(5), null);
};
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
