import './App.css';
import { useState, useEffect } from "react";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>  
      <h2>Age: {props.age}</h2>
    </>

  )
}

const Count = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(prevCount => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

const App = () => {
  const name = "Ahmad";
  // const name = null;
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "someone"}</h1>
      {/* <h1>Hello, {2+2}</h1> */}
      {
        name ? (<>
          test
        </>) : (<>
        
        <h1>test2</h1>
          <h2>There is no name</h2>
        
        </>)
      }

      <Person 
        name={"Ahmad Bin"}
        lastName={"Abdul Jabbar"} 
        age={23}/>

      <Person name={"Ali Bin"} lastName={"Abdul Jabbar"} age={25}/>
      <Person name="Yaqoob" lastName="Mushtaq" age={21}/>
      <Count />
    </div>
  );
}

export default App;
