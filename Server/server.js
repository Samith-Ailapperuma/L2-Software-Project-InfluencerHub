const express = require("express");
const app = express();
const mongoose = require("mongoose");
const projectModel = require('./models/Projects');

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world");
}
);

app.get("/getProject", (req, res) => {
    projectModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createProject", async (req, res) => {
    const project = req.body;
    const newProject = new projectModel(project);
    await newProject.save();

    res.json(project);
});

mongoose.connect(
    "mongodb+srv://Samith_Ailapperuma:MDluFKQbOeXitDXF@cluster0.pl5a6.mongodb.net/AddProject?retryWrites=true&w=majority"
)

app.listen(5000, () => console.log("Server is running in port 5000"));