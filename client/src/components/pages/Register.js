import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { signup } from "../auth";

import {
  Alert,
  FormGroup,
  Form,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";


const Register = () => {


  const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    error: '',
    success: false
  }
  //const history = useHistory();
  const [inputData, setInputData] = useState(INITIAL_STATE);
  
  const { username, email, password, confirmpassword, error, success } = inputData

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInputData({
      ...inputData, [name]: value, error:false
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setInputData({...inputData, error: false})
    if(inputData.password !== inputData.confirmpassword){
      console.log('validation checked!');
      setInputData({
        ...inputData,
        success: false,
        error: 'Password do not match'
      })
    }
    signup({username, email, password})
          .then(data =>{
            if(data.error){
              setInputData({...inputData, error: data.error, success: false})
            }else{
              setInputData({
                ...inputData, INITIAL_STATE, success: true
              })
            }
          })
    
    //history.push('/login')
    // try{
    //   setInputData({
    //     ...inputData,
    //     loading:false,
    //     error: ''
    //   })
    //   const result = await signup(inputData.email, inputData.password)
    //   console.log(result)
    //   history.push('/login')
    // }catch(error){
    //   console.log(error)
    //   setInputData({
    //     ...inputData,
    //     loading: false,
    //     error: 'Failed to create an account'
    //   })
    // }

    // setInputData({
    //   ...inputData,
    //   loading:false
    // })
  }

  return (
    <React.Fragment>
          <p className="lead"><Link to='/'>	&larr; back to home</Link></p>
          <h2 className="heading-title mb-3"><b>Register</b> below</h2>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
          { error && <Alert color='danger'>{error}</Alert>}
          { success && <Alert color='success'>A new account has been created, <Link to='/login' className='alert-link'>login</Link></Alert>}
          <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="username"
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    value={inputData.email}
                    onChange={handleInputChange}
                  />
                  {error.email && (
                  <div className="text-danger">Email format is invalid</div>
                )}
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={inputData.password}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <Button 
                  color="primary" 
                  type="button" 
                  size="lg"
                  onClick={handleSubmit}
                > Sign Up
                  {/*loading ? ('Loading...'):('Sign Up')*/}
                </Button>
            </Form>
     
    </React.Fragment>
  )
}

export default Register

