var mongoose = require('mongoose');
mongoose.connect('mongodb://ec2-52-91-43-38.compute-1.amazonaws.com:27017/newdata');
//mongoose.connect('mongodb://localhost:27017/newdata');

var ContactUsSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    comment: String,
    course: String,
    address:String,
    city:String,
    createdDate: Date
});

// create model if not exists.
module.exports = mongoose.model('ContactUs',ContactUsSchema);