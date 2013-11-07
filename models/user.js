var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true, required: true },
  password_hashed: { type: String, required: true },
  commitments: [{ type: ObjectId, ref: 'Commitment' }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;

User.schema.path('email').validate(function(value, respond) {
  User.findOne({ email: value }, function(err, user) {
    if (user) respond(false)
    else respond(true)
  });
}, 'This email already exists!');
