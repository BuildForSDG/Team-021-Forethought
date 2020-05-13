const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const mongoose = require('mongoose');
const { Appointment, validateAppointment} = require('../models/appointmentSchema');

router.post('/', async (req, res) => {

  //Validates the request body
  const { error } = validateAppointment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

 

  try {
    //  const appointment_status = 'not-honored';
      
  let  appointment = new Appointment(_.pick(req.body, ['consultant_id', 'user_id', 'scheduled_date', 'scheduled_time','appointment_status']));
    
     await appointment.save();

 


    //Generates token and returns it as a header for auto auth
    const token = appointment.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(appointment, ['consultant_id', 'user_id', 'scheduled_date', 'scheduled_time','appointment_status']));

  } catch (error) {

    res.status(500).send(`appointment could not be created: ${error}`)

  }

});

// codes to get all appointments by consultant_id

router.get('/byConsultantID/:consultant_id', async (req, res) => {

    
  
  
    try {
      Appointment.find(req.param.consultant_id,function(err, appointment){
        if(err){
          console.log(err);
        }
        else {
          res.json(appointment);
        }
      });
  
    } catch (error) {
  
      res.status(500).send(`appointment could not be found: ${error}`)
  
    }
  
  });

  //codes to get user appointment by id

  router.get('/userAppointment/:id', async (req, res) => {

  
    try {
      /*
      let id = req.param._id;
      Appointment.findById(id,(err, appointment) =>{
        if(err){
          console.log(err);
        }
        else {
          res.json(appointment);
        }
      });
      */

    
      Appointment.findOne({_id:req.params.id},(err,appointment) =>{
        if(err){
          return res.send(err);
        }
        return res.json(appointment);
    
         });
    
  
    } catch (error) {
  
      res.status(500).send(`appointment could not be located: ${error}`)
  
    }
  
  });


module.exports = router;