import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";
import {
  FormGroup,
  Form,
  Input,
  Button,
  Alert
} from "reactstrap";

const Login = () => {
  const [inputData, setInputData] = useState({
    email:'',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, error, loading, redirectToReferrer } = inputData;
  const { user } = isAuthenticated()

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setInputData({
      ...inputData,
      error:false,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData({...inputData, error: false, loading: true })
    signin({email, password})
          .then(data => {
            if(data.error){
              setInputData({...inputData, error: data.error, loading: false})
            }else{
              authenticate(data, ()=>{
                setInputData({...inputData, redirectToReferrer:true})
              })
            }
          })
  }

  const redirectUser = () => {
    if(redirectToReferrer){
      if(user && user.role === 1){
        return <Redirect to='/admin/dashboard' />
      }else{
        return <Redirect to='/dashboard' />
      }
    }
    if(isAuthenticated()){
      return <Redirect to='/' />
    }
  }

  return (
    <React.Fragment>
      <>
      <p className="lead"><Link to='/'>	&larr; back to home</Link></p>
      <h2 className="heading-title mb-3"><b>Login</b> below</h2>
      <p>Don't have an account? <Link to='/register'>Register</Link></p>
      {error && <Alert color='danger'>{error}</Alert>}
      {loading && <Alert color='success'>loading...</Alert>}
      <Form>
          <FormGroup>
            <Input
              className="form-control-alternative"
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="form-control-alternative"
              id="password"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button 
            color="primary" 
            type="button" 
            size="lg"
            onClick={handleSubmit}
          > Login </Button>
      </Form>
      { redirectUser() }
      </>
    </React.Fragment>
  )
}

export default Login

