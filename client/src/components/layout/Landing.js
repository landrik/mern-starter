import React from 'react'
import { Container, Row, Col } from 'reactstrap';


function Landing() {
  return (
    <Container>
      <Row>
        MERN Auth Starter
      </Row>
      <Row>
        <Col>
        <p>Build a login/auth app with the MERN stack from scratch
Create a (minimal) full-stack app with user authentication via passport and JWTs</p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>Register</Col>
        <Col>Login</Col>
      </Row>
    </Container>
  )
}

export default Landing
