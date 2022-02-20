import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AllProjects() {
    const [listOfProjects, setListOfProjects] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/getProject").then((response) => {
            setListOfProjects(response.data);
        })
    }, [])

    let navigate = useNavigate();

    return (
        <div id="allProjects">
            <h1>All Projects</h1>

            {listOfProjects.map((project) => {
                return (
                    <Card id="projectDetailsCard" border="dark">
                        <div className="details">
                            <span class="title">Project Name:</span>
                            <span class="data">{project.projectName}</span>
                        </div>
                        <div className="details">
                            <span class="title">Project Description:</span>
                            <span class="data">{project.projectDescription}</span>
                        </div>
                        <div className="details">
                            <span class="title">Project Start Date:</span>
                            <span class="data">{project.projectStartDate}</span>
                        </div>
                        <div className="details">
                            <span class="title">Project End Date:</span>
                            <span class="data">{project.projectEndDate}</span>
                        </div>
                        <div>
                            <Button variant="success" size="sm" type="submit" onClick={() => {navigate("/addEvents")}}>Add Event</Button>
                        </div>


                    </Card>
                );
            })}
        </div >

    );
}

export default AllProjects;