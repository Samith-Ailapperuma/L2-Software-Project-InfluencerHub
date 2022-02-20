const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    influencerName: {
        type: String,
        required: false,
    },
    businessName: {
        type: String,
        required: false,
    },
    projectName: {
        type: String,
        require: true,
    },
    projectDescription: {
        type: String,
        required: true,
    },
    projectStartDate: {
        type: Date,
        required: false,
    },
    projectEndDate: {
        type: Date,
        required: false,
    },
});

module.exports = ProjectModule = mongoose.model("addprojects", ProjectSchema);