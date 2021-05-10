import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";


function Landing() {
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped section-hero" style={{ height: '100vh' }}>
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex align-items-center">
            <div className="col px-0">
              <Row className="align-items-center">
                <Col lg="6">
                  <h1 className="text-white">
                  <b>Build</b> a login/auth app with the <span style={{ fontFamily: "monospace" }}>MERN</span> stack from scratch
                  </h1>
                  <p className="lead text-white">
                     Create a (minimal) full-stack app with user authentication via passport and JWTs
                  </p>
                  <div className="btn-wrapper">
                    <Link
                      className="btn btn-success btn-lg"
                      color="info"
                      to="/login"
                    >
                      <span className="btn-inner--text">Login Page</span>
                    </Link>
                    <Link
                      className="btn btn-white ml-1 btn-lg"
                      color="default"
                      to="/register"
                    >
                      <span className="btn-inner--text">Register Page</span>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </main>
  )
}

export default Landing
