import React from 'react';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";


function Landing() {
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
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
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    A beautiful Design System{" "}
                    <span>completed with examples</span>
                  </h1>
                  <p className="lead text-white">
                    Build a login/auth app with the MERN stack from scratch Create a (minimal) full-stack app with user authentication via passport and JWTs
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="info"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-code" />
                      </span>
                      <span className="btn-inner--text">Login</span>
                    </Button>
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-cloud-download-95" />
                      </span>
                      <span className="btn-inner--text">Register</span>
                    </Button>
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
