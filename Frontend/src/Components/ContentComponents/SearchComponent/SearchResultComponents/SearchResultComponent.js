import React, {Fragment, useEffect, useState} from "react";
import DataTableComponent from "./DataTableComponent";
import ConfirmComponent from "./ConfirmationComponents/ConfirmComponent";
import mockupData from "./results.json"
import {Col, Container, Row} from "react-bootstrap";



export default function SearchResultComponent(props) {
    const [okayToSubmit, setOkayToSubmit] = useState(false)


    const [mockData, setMockData] = useState(mockupData)
    // const [mockData, setMockData] = useState(
    //     [
    //         {
    //             "topic": "Apple",
    //             "totalResult": "2400000000",
    //             "hits": [
    //                 {
    //                     "url": "https://www.apple.com/",
    //                     "snippet": "Announcing our biggest updates ever to iOS, iPadOS, WatchOS — and the \nentirely reimagined macOS Big Sur.",
    //                     "rank": 1
    //                 },
    //                 {
    //                     "url": "https://support.apple.com/",
    //                     "snippet": "Apple support is here to help. Learn more about popular topics and find \nresources that will help you with all of your Apple products.",
    //                     "rank": 2
    //                 }
    //             ]
    //         },
    //         {
    //             "topic": "Tim Cook",
    //             "totalResult": "183000000",
    //             "hits": [
    //                 {
    //                     "url": "https://en.wikipedia.org/wiki/Tim_Cook",
    //                     "snippet": "Timothy Donald Cook (born November 1, 1960) is an American business \nexecutive, philanthropist and industrial engineer. Cook is the chief executive \nofficer of ...",
    //                     "rank": 1
    //                 },
    //                 {
    //                     "url": "https://twitter.com/tim_cook?lang=en",
    //                     "snippet": "The latest Tweets from Tim Cook (@tim_cook). Apple CEO Auburn Duke National \nParks 🏞️ “Life's most persistent and urgent question is, 'What are you ...",
    //                     "rank": 2
    //                 }
    //             ]
    //
    //         },
    //         {
    //             "topic": "Steve Jobs",
    //             "totalResult": "427000000",
    //             "hits": [
    //                 {
    //                     "url": "https://en.wikipedia.org/wiki/Steve_Jobs",
    //                     "snippet": "Steven Paul Jobs was an American business magnate, industrial designer, \ninvestor, and media proprietor. He was the chairman, chief executive officer (CEO\n), ...",
    //                     "rank": 1
    //                 },
    //                 {
    //                     "url": "https://www.biography.com/business-figure/steve-jobs",
    //                     "snippet": "Jun 10, 2020 ... Steven Paul Jobs was an American inventor, designer and entrepreneur who \nwas the co-founder, chief executive and chairman of Apple ...",
    //                     "rank": 2
    //                 }
    //             ]
    //
    //         }
    //
    //     ])
    const [mockDataToTest, setMockDataToTest] = useState({
        //data: null
    });

    useEffect(
        () => {
        if(props.search && props.search === "Apple") {
            setMockDataToTest(mockData[0].hits)
        }
        else  if(props.search && props.search === "Tim Cook") {
            setMockDataToTest(mockData[1].hits)
        }
        else if(props.search && props.search === "Steve Jobs") {
            setMockDataToTest(mockData[0].hits)
        }
        else {
            setMockDataToTest([])
        }
    },[props.search])



     {
        if(props.userClickedOnSearch === true){
            if(props.search === '') {
                return(
                    <Fragment>
                        <Container>
                            <Row className={"justify-content-md-center"}>
                                <Col  md={"auto"} xs={6}>
                                    <p> User did not enter anything!</p>
                                </Col>

                            </Row>
                        </Container>
                    </Fragment>

                )
            }
            else {
            return(
                <Fragment>
                    <Container>
                        <Row className={"justify-content-md-center"}>
                            <Col  md={"auto"} xs={6}>
                                <div>User searched for {props.search}</div>
                            </Col>

                        </Row>


                    <DataTableComponent
                        class={''}
                        userClickedOnSearch={props.userClickedOnSearch}
                        search={props.search}
                        mockDataToTest={mockDataToTest}
                        setMockDataToTest={setMockDataToTest}
                        mockData={mockData}
                    />



                    
                    <ConfirmComponent
                        okayToSubmit={okayToSubmit}
                        setOkayToSubmit={setOkayToSubmit}
                        userClickedOnSearch={props.userClickedOnSearch}
                        setUserClickedOnSearch={props.setUserClickedOnSearch}
                        workDone={props.workDone}
                        setWorkDone={props.setWorkDone}
                        mockDataToTest={mockDataToTest}
                        setMockDataToTest={setMockDataToTest}

                    />
                    </Container>
                </Fragment>
            )
            }

        } else {
            return null;
        }




    }
}