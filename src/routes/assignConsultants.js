const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const mongoose = require('mongoose');
const { Appointment, validateAppointment} = require('../models/appointmentSchema');
const { Consultant} = require('../models/consultant');
const { User} = require('../models/user');
router.post('/', async (req, res) => {

  //Validates the request body
  const { error } = validateAppointment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

 

  try {
    //  const appointment_status = 'not-honored';
      
  let  appointment = new Appointment(_.pick(req.body, ['consultant_id', 'user_id', 'scheduled_date', 'scheduled_time']));
    
     await appointment.save();

 


    //Generates token and returns it as a header for auto auth
    //const token = appointment.generateAuthToken();
    //res.header('x-auth-token', token).send(_.pick(appointment, ['consultant_id', 'user_id', 'scheduled_date', 'scheduled_time']));
    res.send(_.pick(appointment, ['consultant_id', 'user_id', 'scheduled_date', 'scheduled_time']));
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

  


//codes to locate closest consultant to a user using his/her location
router.get('/getClosestConsultant/:longitude&:latitude', async (req, res) => {

  let lat = parseFloat(req.params.latitude);
  let long = parseFloat(req.params.longitude);  
  
  let locations = [];
  try {
    Consultant.find(function(err, consultant){
      if(err){
        console.log(err);
      }
      else {
        consultant.forEach(function(record){
         // console.log(record.workplace_latitude,record.workplace_longitude);
          let distance1  = distance(lat,long,record.workplace_latitude,record.workplace_longitude,'K');
          
          locations.push({id:record.id,distance:distance1});

          
      });
      console.log(locations);
      locations.sort(compareValues('distance', 'asc'));
      console.log(locations[0]);

       // res.json(consultant);
        res.json(locations[0]);
      }
    });

  } catch (error) {

    res.status(500).send(`consultant could not be found: ${error}`)

  }

});

// codes to assign consultants to users
router.put('/assignConsultant/:id', async (req, res) => {

   let id = req.params.id;
   var data = {
     consultant_id : req.body.consultant_id
     
   }
  
   // save the user
   User.findByIdAndUpdate(id, data, function(err, user) {
   if (err) throw err;
  
   res.send('Successfully! user updated - '+user.lastname);
   });

});




//function to get distance using latitude and longitude
function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var radlon1 = Math.PI * lon1/180
  var radlon2 = Math.PI * lon2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist
}

//funtion to sort array and get lowest value.
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}


module.exports = router;