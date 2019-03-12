const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//define our model
const userSchema = new Schema({
  email: { 
    type: String,
    unique: true, 
    lowercase: true 
  },
  password: String
});

//On Save encrypt password0
userSchema.pre('save', (next) => {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) { return next(err);}

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
}

//create the class
const modelClass = mongoose.model('user', userSchema);

//export model
module.exports = modelClass;
