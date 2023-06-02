const {Schema, model} = require('mongoose')

const Appointment = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  phoneNumber: {type: String, require: true},
  date: {type: Date, require:true},
  reason: {type: String, default: 'Удаление зуба'},
  patientState: {type: String, default: 'В процессе'},
  cost: {type: Number, default: 3000},
  description: {type: String, default: 'tbd...'},
  email: {type: String, unique:true, require: true},
})

module.exports = model('Appointment', Appointment)