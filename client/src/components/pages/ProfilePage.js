import React from 'react';
import { Link } from 'react-router-dom'
// reactstrap components
import { Button, Card, Container, Row, Col, CardHeader, CardBody } from "reactstrap";


const ProfilePage = () => {
  //const updateForm = () => ()
  return (
    <main className="profile-page">
      <Container fluid>
        <Row>
          <Col xl={{ size: "4", order: 2 }}>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          //src={require("../../assets/img/theme/team-4-800x800.jpg")}
                          src='https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg'
                        />
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3>
                    Jessica Jones{" "}
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h6 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>
                        An artist of considerable range, Ryan — the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy —
                        writes, performs and records all of his own music,
                        giving it a warm, intimate feel with a solid groove
                        structure. An artist of considerable range.
                      </p>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Show more
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Col>
          <Col xl={{ size: "8", order: 1 }}>
            <Card shadow variant="secondary">
              <CardHeader>
                <Row className='align-items-center'>
                  <Col size='8'><h3 className="mb-0">My account</h3></Col>
                  <Col size='4' className='text-right'><Link to="#!" className="btn btn-sm btn-primary">Settings</Link></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <form>
              <h6 className="heading-small text-muted mb-4">User information</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group focused">
                      <label className="form-control-label" htmlFor="input-username">Username</label>
                      <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value="lucky.jesse" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-email">Email address</label>
                      <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group focused">
                      <label className="form-control-label" htmlFor="input-first-name">First name</label>
                      <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value="Lucky" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group focused">
                      <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                      <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value="Jesse" />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">Contact information</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group focused">
                      <label className="form-control-label" htmlFor="input-address">Address</label>
                      <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group focused">
                      <label className="form-control-label" htmlFor="input-city">City</label>
                      <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group focused">
                      <label className="form-control-label" htmlFor="input-country">Country</label>
                      <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="United States" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-country">Postal code</label>
                      <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">About me</h6>
              <div className="pl-lg-4">
                <div className="form-group focused">
                  <label>About Me</label>
                  <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                </div>
              </div>
            </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default ProfilePage
