import React from 'react';
import { Card } from 'react-bootstrap';

class AddEvents extends React.Component {
    render() {
        return (
            <div>
                <div className="projectCard">
                    <Card>
                        <Card.Header>
                            <div className="projectCardHeader">
                                Add Event
                            </div>
                        </Card.Header>
                    </Card>
                </div>

            </div>
        );
    }
}

export default AddEvents;