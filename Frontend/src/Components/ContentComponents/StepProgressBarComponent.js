import React, {Fragment, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {makeStyles} from "@material-ui/core/styles";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";


export default function StepProgressBarComponent(props) {


    function StepProgressBar() {
        const [progress, setProgress] = useState(0)
        const useStyles = makeStyles((theme) => ({
            root: {
                width: '100%',
            },
            backButton: {
                marginRight: theme.spacing(1),
            },
            instructions: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            },
        }));

        function getSteps() {
            return ['Enter Your Question', 'Confirm the Data', 'Done'];
        }
        const classes = useStyles();
        const steps = getSteps();

        useEffect(() => {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    if(oldProgress === 3) {
                        return 3;
                    }
                    return Math.min(oldProgress + 1,3)
                } )
            }, 3000)

            const returnMainDelay = setTimeout(() => {
                props.setWorkDone(false)
            }, 10000)

            
            return () => {
                clearInterval(timer)
                clearTimeout(returnMainDelay);
            }
        },[props.workDone])

        return (
            <div className={classes.root}>
                <Stepper activeStep={progress} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

            </div>
        );
    }
    if(props.workDone === true) {
        return (
            <Fragment>

                <Container>
                    <Row className={"justify-content-md-center"}>
                        <Col lg={2} />
                        <Col >
                            <StepProgressBar/>
                        </Col>
                        <Col lg={2}/>
                    </Row>
                </Container>
            </Fragment>
        )}
    else {
        return null
    }
}