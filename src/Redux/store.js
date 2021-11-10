import { configureStore } from "@reduxjs/toolkit";
import {addTodoReducer} from './reducer';


 const Store = configureStore({
  reducer:addTodoReducer
});
export default Store

