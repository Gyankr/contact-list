/*express js will be able to intract with the mongodb with the help of layber between called mongoose*/

/*require the library */
const mongoose = require('mongoose'); 

/*mongodb://localhost/contact_list_db==>  mongodb:==>mongodb server is running in our system, localhost==> it is running locally,
  contact_list_db==> it is the database name*/
  /*This is how our mongoose will connect to the database*/

  /*connect to the database*/
mongoose.connect('mongodb://localhost/contact_list_db');
/*
These lines are for verifying thatthe mongoose is connected to the database or not

const db = mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('sucessfully connected to the db');
});*/

/*when the mongoose.connect('mongodb://localhost/contact_list_db'); is connected that connection will give us access to the database using ==> const db = mongoose.connection;
so now this const db will be used for accessing the database or checking weather we have connected to the database or not*/

/*aquire the connection(to check if it is succesful orthere is an error)  */
const db = mongoose.connection;

/*db.on('error', console.error.bind(console,'error connecting to db'));
this means on error event like click event i.e. if there is an error then the xext argument will be passed like in setTimeout we handel the click event then function is passed similarly if there is event error then next argument will be called*/
/*error */
db.on('error', console.error.bind(console,'error connecting to db'));

/*similar execution as above line i.e open is event and the function is callback function like setTimeout('click',function(){})*/
/*up and running then print the message */
db.once('open',function(){
    console.log('sucessfully connected to the db');
});