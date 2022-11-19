import classes from './Login.css'
import Navbar from './Navbar.js'
import React, { Component, useState } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CheckCookie } from './Landing';
var test = true;
function Temp(){
  
  alert("Your response has been recorded, thanks!")
  };



// Set cookie (initialise)
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



class Login extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       Name: '',
       Email: '',

    }
  
  }
 
  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    
    e.preventDefault();
    setCookie("email", this.state.Email, 365);
    setCookie("username", this.state.Name, 365);  
    let email = this.state.Email;
    let name = this.state.Name;  
    async function CheckRepeat(){
     console.log("IN FUNCTION");
    var rowcnt =1;
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    console.log();
      while (data1.data[rowcnt]!=null){
        if(email==data1.data[rowcnt].Email){
            return Promise.resolve(false);
      }
      rowcnt+=1;
    } 
    return Promise.resolve(true);
    }
 

  async function runRep(){
    console.log(await CheckRepeat());
    if(await CheckRepeat()==true){
      axios.post('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00', {
          Name: name,
          Email: email
        })
        .then(response => {
        })  
    
    }

  }
  runRep();



  }

    render() {
      

      const { Name, Email } = this.state; 
   
      return (
        <div>
  
        <Navbar></Navbar>
        <h2 className="loginhead">Enter your login details:</h2>
        <br></br>
        <Container fluid className="container">
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input class = "input" placeholder='Enter your full name' type="text" name = 'Name'value = {Name} onChange={this.changeHandler}/>
          </Form.Field>
          <br></br>
          <Form.Field>
            <label>Email</label>
            <input class = "input" placeholder='Enter your email' type="text" name = "Email" value = {Email} onChange={this.changeHandler}/>
          </Form.Field>
          <br></br>
          <Button class = "button1" color="blue" type='submit' onClick={Temp}>Submit </Button>
        </Form>
      </Container>
 
    </div>
      )
    }
    
    
  }

  export  {Login};
















/*
function Login()
{
    
    return ( 
    
    <div>
       <Navbar></Navbar>
        <h1>Please enter your login information</h1>
       <form>
            <label>
                Full Name:
                <input type="text" name="name" />
            </label>
            <br></br>
            <br></br>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <br></br>
            <br></br>
            <button onClick={temp}>
                
                Submit
                
                </button>
        </form>

        </div>

    )


}
    

    function Login()
{
    
    return ( 
        <div>
 <Navbar></Navbar>
        <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form">
          <Form.Field>
            <label> Full Name</label>
            <input placeholder='Enter your name' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Enter your email' />
          </Form.Field>
          
          <Button color="blue" type='submit' onClick={temp}>Submit</Button>
        </Form>
      </Container>


        </div>
       
    )
}
   


    


export default Login; 
*/