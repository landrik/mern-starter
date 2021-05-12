import React from 'react';
import { Route } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const AuthLayout = ({ children }) => (
  <main>
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-default">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
      <Container>
      <Row className='justify-content-center'>
        <Col 
          sm={{ size: 8 }} 
          md={{ size: 6 }} 
          className="pt-3"
        >
          <Card color="light" className="shadow">
            <CardBody className="px-lg-5 py-lg-5">
              { children }
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  </main>
)

const AuthLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <AuthLayout>
        <Component {...props} />
      </AuthLayout>
    )} />
  )
}

export default AuthLayoutRoute
