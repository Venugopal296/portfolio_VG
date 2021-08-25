import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TESCO from "../../assets/img/experience/Tesco.svg";
import L_CAPGEMINI from "../../assets/img/experience/Capgemini.svg";
import L_HONEYWELL from "../../assets/img/experience/Honeywell_Aerospace.svg";
import L_ATOS from "../../assets/img/experience/Atos.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container className="container-style">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ATOS} alt="Atos logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div className="company-duration">
                  <Card.Title className="text-center">Consultant</Card.Title>
                  <div className="duration">
                    <strong>Mar 2021 - present</strong>
                  </div>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front-End Developer</strong>
                    <br />
                    <strong>Role:</strong> Technical Design, Developer, Tester & Code Review
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application.
                    <br />
                    <strong>Technology:</strong> React.js, Redux, Redux-Thunk, Jest, React-testing-library, Javascript, ES6, HTML, CSS, SCSS & Semantic React UI
                    <br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
        <Container className="container-style">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_HONEYWELL} alt="Homeywell logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div className="company-duration">
                  <Card.Title className="text-center">Advanced Software Engineer</Card.Title>
                  <div className="duration">
                    <strong>Nov 2019 - Feb 2021</strong>
                  </div>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front-End Developer</strong>
                    <br />
                    <strong>Role:</strong> Technical Design, Developer, Tester & Code Review
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems.
                    <br />
                    <strong>Technology:</strong> React.js, Redux, Redux-Thunk, Javascript, ES6, HTML, CSS, SCSS & Semantic React UI
                    <br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
        <Container className="container-style">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CAPGEMINI} alt="Capgemini logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div className="company-duration">
                  <Card.Title className="text-center">Consultant</Card.Title>
                  <div className="duration">
                    <strong>Sept 2018 - Oct 2019</strong>
                  </div>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front-End Developer</strong>
                    <br />
                    <strong>Role:</strong> Developer, Tester & Production Support
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems.
                    <br />
                    <strong>Technology:</strong> React.js, Redux, Redux-Thunk, Javascript, ES6, HTML, CSS & SCSS
                    <br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
        <Container className="container-style">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_TESCO} alt="Tesco logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div className="company-duration">
                  <Card.Title className="text-center">Software Engineer</Card.Title>
                  <div className="duration">
                    <strong>Jul 2014 - Sept 2018</strong>
                  </div>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front-End Developer & Mainframe Developer</strong>
                    <br />
                    <strong>Role:</strong> Developer, Tester & Production Support
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems. Also worked as <strong>Production Support</strong> providing system maintenance.
                    <br />
                    <strong>Technology:</strong> React.js, Redux, Redux-Thunk, Javascript, ES6, HTML, CSS & SCSS
                    <br />
                    <strong>Mainframe Technology:</strong> CICS, COBOL, JCL & VSAM
                    <br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
