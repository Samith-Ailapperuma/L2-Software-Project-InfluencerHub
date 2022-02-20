const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
    },

    influencerName: {
        type: String,
        required: true,
    },

    eventName: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    eventStartDate: {
        type: Date,
        required: false,
    },
    eventEndDate: {
        type: Date,
        required: false,
    }

})

mongoose.exports = EventsModule = mongoose.model("addEvents",EventSchema);
