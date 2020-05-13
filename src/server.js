require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./services/dbCon');

const usersRoute = require('./routes/users')
const consultantsRoute = require('./routes/consultants')
const authRoute = require('./routes/auth');
const appointmentRoute = require('./routes/assignConsultants');


const apiPort = process.env.PORT || 4001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Handle user registration
app.use('/api/users',usersRoute);

//Handle consultant registration
app.use('/api/consultants',consultantsRoute);

//Handle login: users and consultants
app.use('/api/auth',authRoute);

//Handles appointments of consultants and users.
app.use('/api/appointments',appointmentRoute);


app.get('/', (req, res) => res.send('#BuildForSDG'));


// Start listening to the app port to handle request
app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});
