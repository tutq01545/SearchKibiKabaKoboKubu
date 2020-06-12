import React, {useState} from 'react';
import './App.css';
import {useQuery} from "react-query";
import {DebounceInput} from "react-debounce-input";



class App extends React.Component{

    render() {
    return (
        <div>
          <div className="App">
            <Search/>
          </div>
        </div>
    );
  }

}



//sends search request to backend with user input
function Search() {

  const [input, setInput,] = useState("");

  const API = 'http://localhost:3000/google/query?q=';

  //fetch data from endpoint
  const fetchGET = async input => {
    const response = await fetch(API + input);
    const data = await response.json();
    console.log(data)
    return data;
  }



  //status, data and error got from backend
  const {status, data, error} = useQuery(input, fetchGET);



 if(status === "loading") return <div> loading...</div>
  if(status ==="error") return <div> error! {error}</div>

    //update user input field
  const updateInputValue = event => {
    setInput(event.target.value)
  }

  return (
      <div>
        <h1> Showing search for {input}</h1>
        <DebounceInput onChange={updateInputValue} debounceTimeout={3000} minLength={3}/>



      </div>

  )
     // <pre>{JSON.stringify(data,null,2)}</pre>
}

export default App;


