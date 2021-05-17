import React, { useState } from 'react';
// reactstrap components
import { Button, Card, Container, Row, Col, CardHeader, CardBody, Form } from "reactstrap";
import { isAuthenticated } from '../auth'
import { read, update, updateUser } from '../auth/apiUser'


const ProfilePage = () => {
  const INITIALSTATES = {
    username: '',
    email: '',
    firstname: 'Jessica',
    lastname: 'Jones',
    about: '',
    location: {
      address: '',
      city: 'Bucharest',
      postcode:'',
      country: 'Romania'
    },
    error: '',
    success: false
  }
  const [values, setValues] = useState(INITIALSTATES);
  const { token } = isAuthenticated();
  const { username, email, firstname, lastname, about, location, error, success } = values;
  const { address, city, postcode, country } = location
  
  const init = (userId) => {
    //console.log(userId)
    read(userId, token)
        .then(data => {
          if(data.error){
            setValues({ ...values, error:true })
          }else{
            setValues({ 
              ...values, 
              username:data.username, 
              email:data.email,
              firstname: data.firstname,
              lastname: data.lastname,
              about: data.about,
              address: data.location.address,
              city: data.location.city,
              postcode: data.location.postcode,
              country: data.location.country
            })
          }
        })
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === 'address' || name === 'city' || name === 'country' || name === 'postcode'){
      setValues({
        ...values,
        location: {
          ...values.location,
          [name]: value
        }
      })
    }else{
      setValues({
        ...values,
        [name]: value
      })
    }
    
  }
  //const updateProfileForm = (e) => {}
  const profileUpdate = (username, email, firstname, lastname, about, location  ) => (
    <Form>
      <h6 className="heading-small text-muted mb-4">User information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg={{size: "6"}}>
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-first-name">First name</label>
              <input 
                type="text" 
                id="input-first-name" 
                className="form-control form-control-alternative" 
                placeholder="First name" 
                name="firstname"
                value={firstname}
                onChange={handleChange} 
              />
            </div>
          </Col>
          <Col lg={{size: "6"}}>
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-last-name">Last name</label>
              <input 
                type="text" 
                id="input-last-name" 
                className="form-control form-control-alternative" 
                placeholder="Last name" 
                name="lastname"
                value={lastname}
                onChange={handleChange}  
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{size: "6"}}>
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-username">Username</label>
              <input 
                type="text" 
                id="input-username" 
                className="form-control form-control-alternative" 
                placeholder="Username" 
                name="username"
                value={username}
                onChange={handleChange} 
              />
            </div>
          </Col>
          <Col lg={{size: "6"}}>
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-email">Email address</label>
              <input 
                type="email" 
                id="input-email" 
                className="form-control form-control-alternative" 
                placeholder="jesse@example.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Contact information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col md={{size: "12"}}>
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-address">Address</label>
              <input 
                type="text" 
                id="input-address" 
                className="form-control form-control-alternative" 
                placeholder="Home Address" 
                name="address"
                value={address}
                onChange={handleChange}  
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{size: "4"}}>
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-city">City</label>
              <input 
                type="text" 
                id="input-city" 
                className="form-control form-control-alternative" 
                placeholder="City" 
                name="city"
                value={city}
                onChange={handleChange}  
              />
            </div>
          </Col>
          <Col lg={{size: "4"}}>
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-country">Country</label>
              <input 
                type="text" 
                id="input-country" 
                className="form-control form-control-alternative" 
                placeholder="Country" 
                name="country"
                value={country}
                onChange={handleChange}  
              />
            </div>
          </Col>
          <Col lg={{size: "4"}}>
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-country">Postal code</label>
              <input 
                type="text" 
                id="input-postal-code" 
                className="form-control form-control-alternative" 
                placeholder="Postal code" 
                name="postcode"
                value={postcode}
                onChange={handleChange}  
              />
            </div>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">About me</h6>
      <div className="pl-lg-4">
      <div className="form-group focused">
        <label>About Me</label>
        <textarea 
          rows="4" 
          className="form-control form-control-alternative" 
          placeholder="A few words about you ..."
          name="about"
          value={about}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
    </Form>
  )

  return (
    <main className="profile-page">
      <header className='header d-flex align-items-center pb-8 pt-5 pt-lg-8' 
        style={{
          minHeight: '600px',
          backgroundImage: `url('https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg')`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover'
        }}>
        <span className="mask bg-gradient-default opacity-8"></span>
        <Container fluid className="d-flex align-items-center">
          <Row>
            <Col lg='7' md='10'>
              <h1 class="display-2 text-white">Hello Jesse</h1>
              <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
              <a href="#!" class="btn btn-info">Edit profile</a>
            </Col>
          </Row>
        </Container>
      </header>
      <Container fluid className="mt--7">
        <Row>
          <Col xl={{ size: "4", order: 2 }} className="mb-5 mb-xl-0">
            <Card className="card-profile">
              <Row className="justify-content-center">
                <Col lg={{ size: "3", order: 2 }}>
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
              </Row>
              <CardHeader className="bg-white text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div class="d-flex justify-content-between">  
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
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>  
                  <Col>
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
              </CardBody>
              
              <div className="text-center">
                <h3>
                {values.firstname} {values.lastname} 
                  <span className="font-weight-light">, 27</span>
                </h3>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  {values.location.city}, {values.location.country}
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
              <div id='renderhere'>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </div>
              </Card>
          </Col>
          <Col xl={{ size: "8", order: 1 }}>
            <Card>
              <CardHeader className="bg-white pt-8 pt-md-4 pb-0 pb-md-4">
                <Row className='align-items-center'>
                  <Col md='8'><h3 className="mb-0">My account</h3></Col>
                  <Col md='4' className='text-right'>
                    <Button
                      color="primary"
                      href="#!"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                { profileUpdate(username, email, firstname, lastname, about, location) }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default ProfilePage
