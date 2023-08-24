import './App.css';
import {  useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.div`
text-decoration:none;
color:#9e0054;
`

function App() {
  const [number1,setNumber1]= useState(0);
  const [number2,setNumber2]= useState(0);
  const [sum,setSum]= useState();
  function create(){

    const url =`https://localhost:7002/add?num1=${number1}&num2=${number2}`;
fetch(url, {
      "method": "POST",
      "headers": {
       
        "content-type": "application/json",
        "accept": "application/json",
        "Access-Control-Request-Headers": "Content-Type",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods": "POST, GET, PUT"
      },
      
    })
    .then(response => response.json())
    .then(response => {
      console.log("result",response);
      setSum(response);
    })
    .catch(err => {
      console.log("error",err);
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-4 text-center">Make An API Call</h1>
          <form className="d-flex flex-column">
            <label htmlFor="name">
              Number1:
              <input
                name="name"
                id="number1"
                type="number"
                className="form-control"
                onChange={(e)=> setNumber1(e.target.value)}      
                required
                />
            </label>
            <label htmlFor="id">
              Number2:
              <input
                name="id"
                id="number2"
                type="number"
                className="form-control"
                onChange={(e)=> setNumber2(e.target.value)}
                />
            </label>
            <button className="btn btn-primary" type='button' onClick={(e) => create()}>
              Add
            </button>
           <div>
           <label>SUM:{sum}
           </label>
           </div>
          </form>
        </div>
      </div>
    </div>
);
}

export default App;
