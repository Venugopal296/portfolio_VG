import React from "react";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./App.css";
import FooterPanel from "./components/footer/footer.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import TimeLine from './components/projects-timeline/projects-timeline.component';
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import Experience from './pages/experience/experience.component';
import Skills from "./pages/skills/skills.component";
import { particlesOptions } from "./particlesOptions";


const App = () => {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('./assets/img/parallex/background.webp')}
          bgImageAlt=''
          strength={-200}
        >
          <div>
            <Container className='container-box rounded'>
              <Fade duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className='container-box rounded'>
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className='container-box rounded'>
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className='container-box rounded'>
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className='container-box rounded'>
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
