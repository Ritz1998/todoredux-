
import React,{useRef} from 'react'


const Todolist=(props)=> {
    const {item,updateTodo,removeTodo,completeTodo}=props;

    const inputRef = useRef(true);

    const changeFocus=()=>{
        inputRef.current.disabled=false;
        inputRef.current.focus();
   
    }
   
     
     const update=(id,value,e)=>{
         if(e.which===13){
             updateTodo({id,item:value});
             inputRef.current.disabled=true;
         }
   
     }
      

    return (
        <li className="card" key={item.id}>
        
        <textarea className="textarea" ref={inputRef} 
        disabled={inputRef} 
        defaultValue={item.item}
        onKeyPress={(e)=>update(item.id,inputRef.current.value,e)} />
   
         <div className="btns">
         <button className="Edit" onClick={()=> changeFocus()}>Edit</button>
         <button  className="Completed" onClick={()=> completeTodo(item.id)}>Completed</button>
         <button  className="Delete" onClick={()=> removeTodo(item.id)}>Delete</button>{" "}
         </div>
         {item.completed && <span className="completed">Done</span>}
         </li>
       
    )
}

export default Todolist
