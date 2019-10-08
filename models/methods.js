const mongoose = require('mongoose');
const schema = require('./schema');
const Meeting = schema.meeting;

function addMeeting(_title,_description,_date,_timing,_members){
    Meeting.create({
        title : _title,
        description : _description,
        date : _date,
        timing : _timing,
        members : _members
    },function(error){
        if(error){
            console.log("Error in adding item to database");
            console.log(error);
        }
        else{
            console.log('item added to collection');
        }
    });
}

function deleteMeeting(_id){
    //do stuff
    console.log('Object deleted from collection');
}

exports.addMeeting = addMeeting;
exports.deleteMeeting = deleteMeeting;