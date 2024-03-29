import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Profile from '../../assets/img/profile/IMG_4365.JPG';
import './about.styles.css';

const About = () => {
  return (
    <div id='about'>
      <div className='about'>
        <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
        <Container>
          <Row className='pt-3 pb-5 align-items-center'>
            <Col xs={12} md={6}>
              <Row className='justify-content-center mb-2 mr-2 '>
                <Image
                  className='profile justify-content-end'
                  alt='profile'
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=' align-items-start p-2 my-details rounded'>
                Hi there! I am <strong>&nbsp;Venugopal K R</strong>
                <br />A passionate programmer, born and brought up in India. I
                am a Web & Mobile App Developer with React.js, React Native,
                Redux, Javascript, ES6, Typescript as my tech stack.
                <br />
                In 2014, I successfully completed my Engineering with
                specialization in "Information science and Engineering".
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />
                I love learning about new technologies, what problems are they
                solving and How can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className='d-flex justify-content-center flex-wrap'>
                  <div>
                    <a href='#contact'>
                      <Button className='m-2' variant='outline-primary'>
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://drive.google.com/file/d/1CiNsOUNqASIFz1vjCHQ2A9d7X8iXp_vP/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-success'>
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://github.com/Venugopal296'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-dark'>
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://www.linkedin.com/in/venugopal-k-r-248a4b56/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-info'>
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
