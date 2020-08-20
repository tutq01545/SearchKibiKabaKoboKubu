import React, {Fragment, useEffect, useState} from "react";
import SearchProgressBarComponent from "./SearchResultComponents/SearchProgressBarComponent";
import SearchResultComponent from "./SearchResultComponents/SearchResultComponent";
import {Col, Container, Row} from "react-bootstrap";
import 'C://Users/PC-Tien/WebstormProjects/react-chat-app/src/Components/App.css'


export default function SearchComponent(props) {

    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    const [buttonCount, setButtonCount] = useState(0)
    const [userClickedOnSearch, setUserClickedOnSearch] = useState(false)



    function ButtonSearchNotification() {

        useEffect(() => {
            const timer = setTimeout(() => {
                setButtonCount(0);
            }, 500);

            return () => clearTimeout(timer)

        },[search])


        if(buttonCount >= 5) {
            return(
                <Fragment>
                    {alert("Dont Spam")}
                </Fragment>
            )
        }
       else {
           return null;
        }

    }


    const handleSearchButtonClick = () => {
        setSearch(query)
        setButtonCount(buttonCount+1)
        setUserClickedOnSearch(true)

    }
    return(
        <Fragment>
        <div >
        <SearchProgressBarComponent
            userClickedOnSearch={userClickedOnSearch}
            search={search}
        />
            <div>
                <Container>
                    <Row className={"justify-content-md-center"} >
                    <Col  md={"auto"} xs={6}>
                        
                        <input

                            type={"text"}
                            value={query}
                            onChange={event => {setQuery(event.target.value)}}
                        />

                        <button
                            type={"button"}
                            onClick={() => {
                                handleSearchButtonClick()
                            }}
                        >Search</button>
                    </Col>
                    </Row>

                </Container>


         </div>
        <ButtonSearchNotification/>
        <SearchResultComponent
            buttonCount={buttonCount}
            search={search}
            userClickedOnSearch={userClickedOnSearch}
            setUserClickedOnSearch={setUserClickedOnSearch}
            setSearch={setSearch}
            workDone={props.workDone}
            setWorkDone={props.setWorkDone}
            class={'resultTableStyle'}

        />
        </div>
        </Fragment>
    )
}