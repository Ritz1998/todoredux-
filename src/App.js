import './App.css';
import Todo from './Components/Todo.js'
// import DisplayTodos from './Components/DisplayTodos.js';
import Header from './Components/Header.js'
import Login from './Components/Login';
import  Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
  
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Header/>

    <div>
    <Switch>

      <Route exact path="/">
      <Todo/>
      </Route>
     
      <Route exact path="/Login">
      <Login/>
      </Route>

    

      
      

   
   
    

    </Switch>
    </div>
     </Router>
    
    </>
   
  );
}

export default App;
