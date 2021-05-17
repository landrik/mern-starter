import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { signup } from "../auth";

import {
  FormGroup,
  Form,
  Input,
  Button,
  Label,
  Row,
  Col,
  FormFeedback,
  FormText
} from "reactstrap";


const Register = () => {


  const INITIAL_STATE = {
    firstname:'',
    lastname: '',
    dateOfBirth: '',
    gender:'',
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    termsAndConditions: '',
    error: '',
    success: false,
    validate: {
      nameState:'',
      emailState: '',
    }
  }
  //const history = useHistory();
  const [inputData, setInputData] = useState(INITIAL_STATE);
  
  const { firstname, lastname, dateOfBirth, gender, username, email, password, confirmpassword, error, success, validate } = inputData

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
    //signup({username, email, password})
    signup(inputData)
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

  //probably this needs to be moved to another file.

  // const nameValidation = (fieldName, fieldValue) => {
  //   if(fieldValue.trim() === ''){
  //     return `${fieldName} is required`
  //   }
  //   if(/[^a-zA-Z -]/.test(fieldValue)){
  //     return 'Invalid characters'
  //   }
  //   if(fieldValue.trim().length < 3){
  //     return `${fieldName} needs to be at leasr three characters`
  //   }
  //   return null
  // }

  // const emailValidation = email => {
  //   if(
  //     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //       email,
  //     )
  //   ){
  //     return null
  //   }
  //   if(email.trim() === ''){
  //     return 'Email is required'
  //   }
  //   return 'Please enter a valid email'
  // }

  // const ageValidation = age => {
  //   if(!age){
  //     return 'Age is required'
  //   }
  //   if(age < 18 ){
  //     return 'Age must be at least 18'
  //   }
  //   if( age > 99 ){
  //     return 'Age must be under 99'
  //   }
  //   return null
  // }

  const validateEmail = (e) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = inputData
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    setInputData({ validate })
  }
  
  // const validationing = {
  //   firstName: name => nameValidation(),
  //   lastName: name => nameValidation(),
  //   email: emailValidation(),
  //   age: ageValidation()
  // }

  return (
    <React.Fragment>
      <p className="lead"><Link to='/'>	&larr; back to home</Link></p>
      <h2 className="heading-title mb-3"><b>Register</b> below</h2>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
      { error && <div className="alert alert-danger alert-secondary" role="alert"> { error } </div>}
      { success && <div className="alert alert-success alert-secondary" role="alert">A new account has been created, <Link to='/login' className='alert-link'>login</Link></div>}
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label 
                htmlFor="firstname" 
                className="form-control-label">Firstname</Label>
              <Input
                className="form-control-alternative"
                id="firstname"
                placeholder="firstname"
                type="text"
                name="firstname"
                value={firstname}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
            <Label 
              htmlFor="firstname" 
              className="form-control-label">Lastname</Label>
            <Input
              className="form-control-alternative"
              id="lastname"
              placeholder="lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label 
                htmlFor="dateOfBirth" 
                className="form-control-label">Date of Birth</Label>
              <Input
                className="form-control-alternative"
                id="dateOfBirth"
                placeholder="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <Label className="mr-2 mb-3">Gender</Label>
            <FormGroup tag="fieldset">
              <FormGroup check inline>
                <Label check>
                  <Input 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleInputChange} 
                  />Male</Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleInputChange}  
                  />Female</Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>  
        <FormGroup>
          <Label 
            htmlFor="username" 
            className="form-control-label">Username</Label>
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
          <Label 
            htmlFor="email" 
            className="form-control-label">Email</Label>
          <Input
            className="form-control-alternative"
            id="email"
            placeholder="name@example.com"
            type="email"
            name="email"
            value={email}
            onChange={
                handleInputChange, 
                validateEmail
              }
            valid={ inputData.validate.emailState === 'has-success' }
            invalid={ inputData.validate.emailState === 'has-danger' }
          />
          <FormText>We will never share your email.</FormText>
          <FormFeedback valid> That's a tasty looking email you've got there.</FormFeedback>
          <FormFeedback invalid> Uh oh! Looks like there is an issue with your email. Please input a correct email. </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label 
            htmlFor="password" 
            className="form-control-label">Password</Label>
              <Input
                className="form-control-alternative"
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </FormGroup>
        <FormGroup>
          <Label 
            htmlFor="confirmpassword" 
            className="form-control-label">Confirm Password</Label>
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
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="termsAndConditions" />{' '}
            I have read and accepted Terms & Conditions and the Privacy Policy*
          </Label>
        </FormGroup>
        <Button
          className="mt-3" 
          color="primary" 
          type="button" 
          size="lg"
          onClick={handleSubmit}
        > Register
          {/*loading ? ('Loading...'):('Register')*/}
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default Register

