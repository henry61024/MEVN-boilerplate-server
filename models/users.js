const mongoose = require('mongoose'),
      userSchema = new mongoose.Schema({
          username: String,
          description: String
      }),
      User = mongoose.model('User', userSchema)

exports.create = (obj) => {
    user = new User(obj)
    return user.save()
}

exports.read = (username) => {
    return User.findOne({ username }).exec()
}

exports.update = (obj) => {
    return User.findOneAndUpdate({ username: obj.username }, obj).exec()
}

exports.delete = (obj) => {
    return User.findOneAndRemove(obj).exec()
}

exports.readAll = () => {
    return User.find().exec()
}