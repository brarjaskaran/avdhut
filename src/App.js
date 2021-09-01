/**
 * Entry application component used to compose providers and render Routes.
 * */
import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Media,
  Card,
  CardImg,
  CardText,
  Form,
  FormGroup,
  Input,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
// Web Icon fonts
import Icofont from "react-icofont";
// Web theme color root css
import "./components/colors.css";
import Tdsheader from "./components/Tdsheader";
import Tdsbanner from "./components/Tdsbanner";
import Tdsinputgroup from "./components/Tdsinputgroup";
import Tdsaboutslider from "./components/Tdsaboutslider";
import Tdsfeedbackslider from "./components/Tdsfeedbackslider";
import Tdslightbox from "./components/Tdslightbox";
import Tdspricingtable from "./components/Tdspricingtable";
import Tdsfooter from "./components/Tdsfooter";
import "./App.css";
import "./responsive.css";
import SubmitForm from "./components/SubmitForm";
import Partners from "./components/Partners";
import Address from "./components/Address";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navbar  */}
        <Tdsheader />

        {/* Hero Section Start */}
        <div id="home" className="section">
          <Tdsbanner />
        </div>
        {/* Subscribe Section Start*/}
        {/* <div className=" subscribe-box grapping">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" md="12" lg="8" className="text-left">
                <h4 className="text-white">
                  {" "}
                  Join the Soxolo! Sign up for the latest updates and news.
                </h4>
              </Col>
              <Col xs="12" md="12" lg="4">
                <Tdsinputgroup />
              </Col>
            </Row>
          </Container>
        </div> */}

        {/* Welcome Section Start */}
        <div className=" welcome-box grapping">
          <Container>
            <div className="title-box">
              <h2>
                Welcome to <b>Avdhut Pty Ltd</b>
              </h2>
              <h3 style={{ fontSize: "1.2rem" }}>
                End-to-end solution provider in Telecommunications, Construction
                & ICT sectors.
              </h3>{" "}
              {/* <Media body>
                <Media heading>Dial</Media>
                <a href="tel:+61 468 441 977"> +61 468 441 977</a> <br />
              </Media>{" "} */}
            </div>
            {/* <Row>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-drag2" />
                  <h4>Creative Design</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-code" />
                  <h4>Friendly Codes</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-live-support" />
                  <h4>Fast Support</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>

        {/* our partners */}

        <div className="section ourservice grapping">
          <div className="title-box">
            <h2>
              Our <b>Partners</b>
            </h2>
          </div>
          <Partners />
        </div>
        {/* About us Section Start */}
        <div className="section about-box grapping" id="about">
          <Container>
            <Row>
              <Col xs="12" sm="12" md="12" lg="6">
                <div className="about-img">
                  <img
                    src={require("./images/aboutus.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <Tdsaboutslider />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="why-choose">
          <Row noGutters>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-cubes" style={{ color: "#ffb703" }} />
                <h5>Proposal Preperation</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont
                  icon="icofont-dollar-true"
                  style={{ color: "#ffb703" }}
                />
                <h5>Estimation</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-support" style={{ color: "#ffb703" }} />
                <h5>Contract Administration</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-team" style={{ color: "#ffb703" }} />
                <h5>Project Scheduling</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont
                  icon="icofont-calculations"
                  style={{ color: "#ffb703" }}
                />
                <h5>Tender Evalution</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont
                  icon="icofont-architecture-alt"
                  style={{ color: "#ffb703" }}
                />
                <h5>Quantity Surveying</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont
                  icon="icofont-money-bag"
                  style={{ color: "#ffb703" }}
                />
                <h5>Project Costing</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont
                  icon="icofont-automation"
                  style={{ color: "#ffb703" }}
                />
                <h5>SH&E Compliance</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-database" style={{ color: "#ffb703" }} />
                <h5>Document Control Management</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-ui-play" style={{ color: "#ffb703" }} />
                <h5>Project Presentations</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-bars" style={{ color: "#ffb703" }} />
                <h5>Financial Forecasting</h5>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <div className="why-box text-center">
                <Icofont icon="icofont-crown" style={{ color: "#ffb703" }} />
                <h5>Leadership and Communication</h5>
              </div>
            </Col>
          </Row>
        </div>

        {/* Our Services Section Start */}
        <div className="section ourservice grapping" id="services">
          <Container>
            <div className="title-box">
              <h2>
                Our <b>Services</b>
              </h2>
            </div>
            <Row>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-satellite"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>Network Design</h4>
                  <p>
                    Network Planning & Design Network Construction Network
                    Integration & Roll-out Performance & Optimization Operations
                    & Maintenance
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-cement-mix"
                    style={{ color: "var(--orange)" }}
                  />

                  <h4>Civil Construction</h4>
                  <p>
                    Telecommunication Infrastructure Asbestos Removal Wireless &
                    Rooftop Towers Pit & Pipe (Trenching & Drilling) Manholes
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-at"
                    style={{ color: "var(--orange)" }}
                  />

                  <h4>ICT Services</h4>
                  <p>
                    Enterprise Software Solutions On-shore & Off-shore ICT
                    Solutions Enterprise Cloud Computing Solutions Enterprise IT
                    Security Solutions Blockchain Enablement Solutions
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Team Section Start */}
        <div className="section expert-team grapping" id="team">
          <Container>
            <div className="title-box">
              <h2>
                Our <b>Team</b>
              </h2>
            </div>
            <Row>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  {/* <div className="team-img">
                    <img
                      src={require("./images/team-img1.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div> */}
                  <h4 className="text-white">Mitalkumar Patel</h4>
                  <p className="text-white">Business Development Manager</p>
                  <p className="text-white">+61 468441977</p>
                  <p className="text-white">meet@avdhut.com.au</p>
                  {/* <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup> */}
                </div>
              </Col>

              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  {/* <div className="team-img">
                    <img
                      src={require("./images/team-img3.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div> */}
                  <h4 className="text-white">Urmil Patel</h4>
                  <p className="text-white">Operations Manager</p>
                  <p className="text-white">+61 430 486 306</p>
                  <p className="text-white">urmil@avdhut.com.au</p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  {/* <div className="team-img">
                    <img
                      src={require("./images/team-img3.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div> */}
                  <h4 className="text-white">Lovepreet Sarao</h4>
                  <p className="text-white">
                    Telecommication Engineer and Planner
                  </p>
                  <p className="text-white">lovepreetsarao@avdhut.com.au</p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  {/* <div className="team-img">
                    <img
                      src={require("./images/team-img3.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div> */}
                  <h4 className="text-white">Mehul </h4>
                  <p className="text-white"> Site Controller</p>
                  <p className="text-white">mehul@avdhut.com.au</p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  {/* <div className="team-img">
                    <img
                      src={require("./images/team-img3.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div> */}
                  <h4 className="text-white">Nirav</h4>
                  <p className="text-white">Site Controller</p>
                  <p className="text-white">nirav@avdhut.com.au</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Portfolio Section Start*/}
        {/* <div className="section ourportfolio grapping" id="portfolio">
          <Container>
            <div className="title-box">
              <h2>
                Recent <b>Jobs</b>
              </h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
            <Tdslightbox></Tdslightbox>
          </Container>
        </div> */}
        {/* Marketing Section Start*/}
        {/* <div className="marketing-section grapping">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" sm="12" md="12" lg="6">
                <div className="marketing-img">
                  <img
                    src={require("./images/digitalmarketing.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-web" />
                  </Media>
                  <Media body>
                    <Media heading>Fully Responsive</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-chart-pie" />
                  </Media>
                  <Media body>
                    <Media heading>Digital Marketing</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-brand-designfloat" />
                  </Media>
                  <Media body>
                    <Media heading>Clean & Unique Design</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Expert Feadback Section Start */}
        {/* <div className="expertfeesback grapping">
          <Container>
            <div className="title-box">
              <h2>
                <b>Feadback</b>
              </h2>
            </div>
            <Tdsfeedbackslider></Tdsfeedbackslider>
          </Container>
        </div> */}
        {/* Our  Pricing Section Start*/}
        {/* <div className="section ourlatest-pricing grapping" id="price">
          <Container>
            <div className="title-box">
              <h2>
                Our Latest <b>Pricing</b>
              </h2>
            </div>
            <Tdspricingtable></Tdspricingtable>
          </Container>
        </div> */}
        {/*Our Latest News  Section Start*/}
        {/* <div className="section latestnews grapping" id="blog">
          <Container>
            <div className="title-box">
              <h2>
                Our Latest <b>News</b>
              </h2>
              <p>
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </p>
            </div>
            <Row>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new1.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new2.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new3.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Work With Us  Section Start*/}
        <div className="workwithus grapping">
          <Container>
            <div className="title-box mb-0">
              <h2 className="text-white">
                <b>Want to work with us?</b>
              </h2>
              <p className="text-white mb-4">Lets talk about project</p>
              {/* <Button>Get Started</Button> */}
            </div>
          </Container>
        </div>
        {/* Contact Us Section Start  */}
        <div className="section contactus grapping" id="contact">
          <Container>
            <div className="title-box">
              <h2>
                Contact <b>Us</b>
              </h2>
            </div>
            <Row>
              {/* <Col xs="12" md="12" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-location-pin" />
                  </Media>
                  <Media body>
                    <Media heading>Address</Media>
                    <p> Exercisplan 4, 111 49 Stockholm, Sweden</p>
                  </Media>
                </Media>
              </Col> */}
              <Col xs="12" md="6" lg="5">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-mail" />
                  </Media>
                  <Media body>
                    <Media heading>Email</Media>
                    <a href="mailto:info@avdhutech.com">
                      {" "}
                      info@avdhutech.com
                    </a>{" "}
                    <br />
                  </Media>
                </Media>
              </Col>
              <Col xs="12" md="6" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-phone" />
                  </Media>
                  <Media body>
                    <Media heading>Phone</Media>
                    <a href="tel:+61 468 441 977"> +61 468 441 977</a> <br />
                  </Media>
                </Media>
              </Col>
              <Col xs="12" md="6" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-home" />
                  </Media>
                  <Media body>
                    <Media heading> Office Address</Media>
                    <a>2 Jade Street, Hope Valley 5090</a>
                  </Media>
                </Media>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="12" md="12" lg="4">
                <h4>Get in Touch</h4>
                <hr />
                <p>We would love to see on our social media</p>
                <ListGroup className="social-icon">
                  <ListGroupItem
                    tag="a"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    {" "}
                    <Icofont icon="icofont-facebook" />
                  </ListGroupItem>

                  <ListGroupItem
                    tag="a"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    {" "}
                    <Icofont icon="icofont-instagram" />
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col xs="12" md="12" lg="8">
                <SubmitForm />
              </Col>
            </Row>
          </Container>
        </div>
        {/* address google map */}

        {/* <Address /> */}

        {/* Footer  Section Start */}
        <div className="">
          <Tdsfooter></Tdsfooter>
        </div>
      </div>
    );
  }
}

export default App;
