import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, CloseButton, Form, Card } from 'react-bootstrap'
import axios from "axios";

function EditProject(){
    const [projectName,setProjectName] = useState();
    const [projectDescription,setProjectDescription] = useState();
    const [projectStartDate,setProjectStartDate] = useState();
    const [projectEndDate,setProjectEndDate] = useState();

    const {id} = useParams();

    let navigate = useNavigate();

    const editProject = () => {
        axios.put(`/updateEvent/${id}`, {
            projectName,
            projectDescription,
            projectStartDate,
            projectEndDate
        }).then((res) => {
            console.log("Project edited");
        });
    }

    useEffect(() =>{
        axios.get(`/getProject/${id}`).then((res) => {
            setProjectName(res.data.project.projectName);
            setProjectDescription(res.data.project.projectDescription);
            setProjectStartDate(res.data.project.projectStartDate);
            setProjectEndDate(res.data.project.projectEndDate);
            console.log("ProjectData",res.data.project);
        });
    },);

    return(
        <div>
            <div className="projectCard">
                <Card border="dark" >
                    <Card.Header>
                        <div className="projectCardHeader">
                            Edit a Project
                            <CloseButton className="closeButton" onClick={() => {navigate("/allProjects")}} />
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <h5>Edit Project Name</h5>
                                <Form.Control as="textarea"
                                    rows={1}
                                    placeholder='Add Project Name'
                                    value={projectName}
                                    onChange={(event) => { setProjectName(event.target.value) }}>
                                </Form.Control><br />
                            </Form.Group>

                            <Form.Group>
                                <h5>Edit Project Description</h5>
                                <Form.Control as="textarea"
                                    rows={3}
                                    placeholder='Add Project Description'
                                    value = {projectDescription}
                                    onChange={(event) => { setProjectDescription(event.target.value) }}>
                                </Form.Control><br />
                            </Form.Group>

                            <h5>Edit Project Duration</h5>

                            <Form.Label>Start Date</Form.Label><br />
                            <input
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                max="2030-12-31"
                                value = {projectStartDate}
                                onChange={(event) => { setProjectStartDate(event.target.value) }} /><br />
                            <Form.Label>End Date</Form.Label><br />
                            <input
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                max="2030-12-31"
                                value = {projectEndDate}
                                onChange={(event) => { setProjectEndDate(event.target.value) }} /><br />
                        </Form>
                        <Card.Footer style={{ paddingLeft: '50%' }}>
                            <Button variant="warning" size="lg" type="submit" onClick={editProject}>Edit Project</Button>
                        </Card.Footer>

                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
}

export default EditProject;