import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTodos,removeTodos,updateTodos,completeTodos } from "../Redux/reducer.js";
import Todolist from './Todolist.js';


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
 
const DisplayTodos=(props)=> {
    const [sort, setSort] = useState("active")
    return (
        <div className="DisplayTodos">
            <div className="buttons">
            <button onClick={()=>setSort("active")}>Active</button>
            <button onClick={()=>setSort("completed")}>Completed</button>
            <button onClick={()=>setSort("all")}>All</button>
            </div>
            <ul className="todolist">
        
            
                {
                    /* For Active items*/
                    props.todos.length>0 &&sort==="active"?
                    props.todos.map(item =>{
                        return(
                            item.completed===false &&
                            <Todolist
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            

                            />
                        )
                    })   :null 
}

{                   
                      /* For Completed  items*/

                    props.todos.length>0 &&sort==="completed"?
                    props.todos.map(item =>{
                        return(
                            item.completed===true &&
                            <Todolist
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            
                            />
                        )
                    })   :null 
}


  {
                      /* For All items*/
                    
                    props.todos.length>0 &&sort==="all"?
                    props.todos.map(item =>{
                        return(
                            <Todolist
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            
                            />
                        )
                    })   :null 
}

            </ul>
            
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodos);
