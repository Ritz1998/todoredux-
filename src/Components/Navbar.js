import React from 'react'
import { Navbar,Container ,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { setLogin,Submit } from '../Redux/reducer';




const mapStateToProps = (state) => {
  // console.log(Todolist);
  return {

    USername: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Setlogin: (obj) => dispatch(setLogin(obj)),
    Submit:()=>dispatch(Submit())
    
  };
  
};


const Header=(props)=> {
    return (
        <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand">ToDo   </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  className="nav-item">  <Link to="/">Home</Link></Nav.Link>
              <Nav.Link  className="nav-item">  <Link to="/login">Login</Link></Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
