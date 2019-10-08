const mongoose = require('mongoose');

var meetingSchema = new mongoose.Schema({
    title : String,
    description : String,
    date : Date,
    timing : String,
    members : String
});

var Meeting = mongoose.model("Meeting",meetingSchema);

exports.meeting = Meeting;