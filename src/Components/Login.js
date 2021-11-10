import React ,{useState,useEffect}from 'react'

import {Form,Button} from "react-bootstrap"
import { connect } from 'react-redux';
import { setLogin } from '../Redux/reducer';



const mapDispatchToProps = (dispatch) => {
  return {
    Setlogin: (obj) => dispatch(setLogin(obj)),
   
  };
  
};





const mapStateToProps = (state) => {
  return {
      Login: state,
  };
};


const Login=(props)=> {

    // const [Handlechange,setInput]=useState("");
    
    // const [change,setChange]=useState([]);

    // const [show,setShow]=useState([]);
    const [Logininfo,setLogininfo]=useState({
      username:"",
      pswd:""
    });

   const Handlechange=(e)=>{
     setLogininfo({...Logininfo,[e.target.id]:e.target.value})

   }
   useEffect(() => {
     console.log(Logininfo);
   
     
   }, [Logininfo])

    const Submit=()=>{
      props.Setlogin(Logininfo)

    }



    
    return (
        <div>
            <Form className="Login">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="Label" >Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter username" id="username" onChange={Handlechange}  />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="Label">Password</Form.Label>
    <Form.Control type="password" placeholder="enter Password" id="pswd"   onChange={Handlechange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={Submit}>
    Submit
  </Button>
</Form>

   {/* <ol>
      { <li>{}</li>
   </ol>
             */}
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
