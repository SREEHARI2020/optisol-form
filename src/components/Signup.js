import React, { Component } from 'react';
import { Button, TextField, Typography } from '@material-ui/core'
import './Signup.css';
import {withRouter,Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class Signup extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           email:"",
           password1:"",
           password2:"",
           error:{}
        }
        
      }

      HandleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value})

      }
     
      validate=()=>{
        let valid={}
        valid.email=this.state.email.length>=6 && this.state.email.length<20? "":" email should be between 6 to  20 characters"
        valid.password1=this.state.password1.length>=5 && this.state.password1.length<10? "":" password should be between 5 to 10 characters"
        valid.password2=this.state.password2.length>=5 && this.state.password2.length<10? "":" password should be between 5 to 10 characters"
        valid.samepass=this.state.password1===this.state.password2?"":"passwords doesn't match"
        return valid;
    }

      handleSubmit=(e)=>{
        e.preventDefault();
        let obj=this.validate();
        this.setState({error:obj})

       
        if(this.state.error.email==="" && this.state.error.password==="" &&this.state.error.samepass===""){
            this.props.history.push('/')
        }
      }

    render() {
        return (
            <div className="Forms-container">   

                
         <Typography component="h1" variant="h5">
          Sign up here
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
             {this.state.error?<div className="Forms-user-error">{this.state.error.samepass}</div>:""} 
         {this.state.error?<div className="Forms-user-error">{this.state.error.password1}</div>:""} 
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password1"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>this.HandleChange(e)}
             value={this.state.password1}
            autoComplete="current-password"
        
         
          />
         {this.state.error?<div className="Forms-user-error">{this.state.error.password2}</div>:""} 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>this.HandleChange(e)}
             value={this.state.password2}
            autoComplete="current-password"
        
         
          />
         
          <Button
            onClick={this.handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign up
          </Button> </form>

          <Link to="/">  
          <div className="Forms-container-signup-link">  
         < ArrowBackIcon/>
         <div>Go back to Sign in page</div> 
        </div>  </Link>
        </div>
        );
    }
}

export default withRouter(Signup);