/* creating schema => schema is a blueprint of data which we will store in the db*/
/*mongoose is used to create that schema and since schema is written for mongoose to access the db and populate it so we need to require mongoose*/
const mongoose = require('mongoose'); 
/*if we have require mongoose i.e. require('mongoose'); in more than one places it will be require from the same instance i.e 
we have allready required it in mongoose.js and in index.js main file  if we import my contact below the line const db = require('./config/mongoose');
the instance of require('mongoose'); of mongoose.js in config folder will be used for contact.js which is present in models folder*/

/*Creating sChema for storing the data in the database*/
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        /*we Can put more validation here*/
    },
    phone:{
        type:String,
        required: true
        /*we Can put more validation here only like phone number should be start with +91 and all...*/
    }
});

/* name of the ColleCtion in the database i.e where data will be stored in an array .....Like ContaCtList was there in index.js*/
const Contact = mongoose.model('Contact',contactSchema);
/*mongoose.model('Contact',contactSchema)==> mongoose.model: naming convension that is follows ,('Contact',contactSchema);==> Contact will be the name in the db and this Contact will be defined by the schema ie contactSchema */

/*exporting this const Contact*/
module.exports = Contact;