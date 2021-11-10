import React, { useState} from "react";
import { connect } from "react-redux";
import { addTodos,removeTodos,updateTodos,completeTodos } from "../Redux/reducer.js";
import DisplayTodos from "./DisplayTodos.js";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo:(id)=>dispatch(removeTodos(id)),
    updateTodo:(obj)=>dispatch(updateTodos(obj)),
    completeTodo:(obj)=>dispatch(completeTodos(obj)),
  };
  
};



 const Todos = (props) => {

 
  const [todo, setTodo] = useState("");
  // const [state, setstate] = useState([]);


 


  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // This is add func to add todos
  const add = () => {
        if (todo === "") {
        alert("Input is Empty");
        } else {
        props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: [todo],
            completed: false,
        });
        setTodo("");
        }
  };
  //console.log("props from store", props);
//   useEffect(() => {

//     localStorage.setItem("lists", JSON.stringify(todo))
//   }, [todo]);
 
 
  return (
      <>
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />


      <button className="add-btn" placeholder="Enter the task" onClick={add}>Add</button>
        <br/>
       
      </div>
      <DisplayTodos/>
     </>

     

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos); // connect method to connect this component with redux
