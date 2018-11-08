var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  username: {
        type: String,
        unique: true,
        required: "Type your email for username!",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
  password: {
        type: String,
        trim: true,
        required: "Make it tricky, but not too tricky...",
        // validate: [
        //     function(input) {
        //       return input.length >= 6;
        //     },
        //     "Password should be longer."
        //   ]
    }, 
    userCreated: {
        type: Date,
        default: Date.now
      }, 
    challenges: {
        type: Schema.Type.ObjectId,
        ref:  'Challenges'
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
