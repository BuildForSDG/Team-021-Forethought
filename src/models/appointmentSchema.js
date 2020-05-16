const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  consultant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scheduled_date: Date,
  scheduled_time: String,
  appointment_status: { type: String, default: 'pending' }

},
{ timestamps: true });

appointmentSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_PRIVATE_KEY);
  return token;
}

function validateAppointment(appointment) {
    const schema = {
      consultant_id: Joi.string().required(),
      user_id: Joi.string().required(),
      scheduled_date: Joi.string().required().strict(),
      scheduled_time: Joi.string().required().strict()
      //appointment_status: Joi.string().required().strict()
    }
  
    return Joi.validate(appointment, schema);
  }

//module.exports = mongoose.model('Appointment', appointmentSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);

exports.Appointment = Appointment;
exports.validateAppointment = validateAppointment;