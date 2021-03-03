import React, { Component } from 'react';
import { Button, TextField, Typography } from '@material-ui/core'
import './SignIn.css';
import {withRouter} from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           email:"",
           password:"",
           error:{}
        }
        
      }

      HandleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value})

      }
     
      validate=()=>{
        let valid={}
        valid.email=this.state.email.length>=6 && this.state.email.length<20? "":" email should be between 6 to  20 characters"
        valid.password=this.state.password.length>=5 && this.state.password.length<10? "":" password should be between 5 to 10 characters"
        
        return valid;
    }

      handleSubmit=(e)=>{
        e.preventDefault();
        let obj=this.validate();
        this.setState({error:obj})

       
        if(this.state.error.email==="" && this.state.error.password===""){
           this.props.history.push('/view')
        }
      }

    render() {
        return (
            <div className="Forms-container">   

                
         <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
        {this.state.error?<div className="Forms-user-error">{this.state.error.email}</div>:""}  
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
           onChange={(e)=>this.HandleChange(e)}
             value={this.state.email}
            autoComplete="email"
            autoFocus
           
           
          
          />
         {this.state.error?<div className="Forms-user-error">{this.state.error.password}</div>:""} 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>this.HandleChange(e)}
             value={this.state.password}
            autoComplete="current-password"
        
         
          />
         
          <Button
            onClick={this.handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign In
          </Button> </form>
        </div>
        );
    }
}

export default withRouter(SignIn);