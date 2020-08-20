import React from "react";
import {Nav, Navbar} from "react-bootstrap";


export default function NaviBarComponent() {

    return(
        <Navbar bg={"light"} expand={"lg"}>
            <Navbar.Brand>
                <img
                src={require('../Resource/robot.png')}
                alt={"Page Logo"}
                className={"d-inline-block align-top"}
                height="50px"
                width="50px"
                />
            </Navbar.Brand>

            <Nav className={"mr-auto"}>
                <Nav.Link href={"#home"}>Home</Nav.Link>
            </Nav>

        </Navbar>
    )

}