import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { increment, decrement } from "./Actions"

function App(){
  const count = useSelector(state => state.count);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch(); 
  return(
      <div className="App">
        <h1>counter:{count}</h1>
        {isLogged ? <h3>logged in</h3>:""}
        <button onClick={()=> dispatch(increment(3)) }>+</button>
        <button onClick={()=> dispatch(decrement()) }>-</button>
      </div>
    );
}
export default App