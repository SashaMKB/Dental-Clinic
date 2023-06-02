const {Schema, model} = require('mongoose')

const User = new Schema({
  email: {type: String, unique:true, require: true},
  password: {type: String, require: true},
  role: {type: String, require:true, default: 'USER'},
  fullName: {type: String, require:true},
  visitHistory: [{type: Schema.Types.ObjectId, ref: 'Appointment'}]
})

module.exports = model('User', User) 