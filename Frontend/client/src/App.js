import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {

    //declare the state of the requests' response. 
    state = {
        response: '', //response to GET
        post: '', //POST input from user
        responseToPost: '', //response to POST
    };

    //fetch the response from server, set the state of the response with the received msg
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async() => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    //set the header of the JSON, as well as execute POST request to api/world
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();

        this.setState({ responseToPost: body });
    };

    render() {
        return ( <
            div className = "App" >

            <
            p > { this.state.response } < /p> <
            form onSubmit = { this.handleSubmit } >
            <
            p >
            <
            strong > Post to Server: < /strong> <
            /p> <
            input type = "text"
            value = { this.state.post }
            onChange = { e => this.setState({ post: e.target.value }) }
            /> <
            button type = "submit" > Submit < /button> <
            /form> <
            p > { this.state.responseToPost } < /p> <
            /div>
        );
    }
}

export default App;