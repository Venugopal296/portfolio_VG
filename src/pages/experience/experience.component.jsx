import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
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
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Advanced Software Engineer</Card.Title>
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
                    <strong>Duration:</strong> November 2019 - February 2021
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
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Consultant</Card.Title>
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
                    <strong>Duration:</strong> September 2018 - October 2019
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
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer</Card.Title>
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
                    <strong>Duration:</strong> July 2014 - September 2018
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
