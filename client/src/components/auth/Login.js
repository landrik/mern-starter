import React from 'react'
import {
  Container,
  FormGroup,
  Form,
  Input,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 4, offset: 4 }} className="pt-5">
          <p className="h5">back to home</p>
          <p className="h2">Login below</p>
          <p className="h6">Don't have an account? Register</p>
          <Form>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="password"
                  placeholder="password"
                  type="password"
                />
              </FormGroup>
              <Button color="primary" type="button" size="lg"> Login </Button>
          </Form>
        </Col>
      </Row>
      
    </Container>
    
  )
}

export default Login

