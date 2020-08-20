import React, {Fragment, useEffect} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export default function ConfirmComponent(props) {
    const handleCheck = () => {
       props.setOkayToSubmit(!props.okayToSubmit)
    }


    const handleSubmit = () => {
        if(props.okayToSubmit === false) {
            alert("you cant submit")
        }
        else {
            props.setOkayToSubmit(true)
            props.setUserClickedOnSearch(false)
            props.setWorkDone(true)
            console.log(props.mockDataToTest)

            const fileData = JSON.stringify(props.mockDataToTest)
            const blob = new Blob([fileData], {type: "text/plain"});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'resultss.json';
            link.href = url;
            link.click();



        }
    }





    if(props.userClickedOnSearch === true) {
    return (
        <Fragment>
            <Container>
                <Row xs={6} md={8}>
                    <Col>
                        <input
                            type={"checkbox"}
                            defaultChecked={props.okayToSubmit}
                            onClick={handleCheck}
                        /> Are you sure you want to submit?
                    </Col>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Row>
            </Container>

        </Fragment>
    )
    }
    else return null;
}