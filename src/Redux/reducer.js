import { createSlice } from "@reduxjs/toolkit";

const initialState = []
   


 export const addTodoReducer = createSlice({
  name: "todos",
  Heading:"todolist",
  Login: false,
  username:"USername",
  pswd:"",
  list:[],
  initialState,
  reducers: {
    
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);

      // state.list=action.payload
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    Submit: (state, action) => {
      return state(action.payload)
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },

    
    setLogin:(state,action)=>{
      state.username=action.payload.username;
      state.pswd=action.payload.pswd

    }
  },
    

});


export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  setLogin,
  Submit

} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;