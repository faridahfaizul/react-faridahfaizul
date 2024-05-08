import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

export default function Home() {
    return (        
    <div className='container'>
        <div className='small-device'>
        <Row>
            <Col sm={4}>                    
                <div>
                    <div className='fixed small-hidden'>                    
                        <Image src={'./images/me.jpg'} roundedCircle className='profile-image' alt='My Image' />
                        <div className='App space'>               
                            <a
                                href='mailto:fsyahirahfaizul@gmail.com'
                                target='_blank'
                                className='profile-link'
                            ><Icon.EnvelopeFill color='black' size={35}/></a>
                            <a
                                href='https://www.linkedin.com/in/faridahfaizul/'
                                target='_blank'
                                className='profile-link'
                            ><Icon.Linkedin color='black' size={30}/></a>
                            <a
                                href='https://github.com/faridahfaizul'
                                target='_blank'
                                className='profile-link'
                            ><Icon.Github color='black' size={30}/></a>                            
                        </div>
                    </div>
                </div>
            </Col>          
            <Col sm={1}></Col>      
            <Col sm={7}>
                <div>                        
                    <h1 className='profile-title'>hello, i'm Faridah</h1>
                    <div className='profile-desc'>
                        <p>
                            I specialize in crafting <strong>Front-End</strong> websites as a 
                            <strong> Software Developer</strong>, with a portfolio of personal 
                            projects showcased in my works section.
                        </p>

                        <p>
                            My expertise extends to <strong>UX Design</strong>, enhancing my 
                            ability to create captivating digital experiences as a web developer.
                        </p>

                        <p>
                            As someone deeply passionate about crafting engaging digital experiences, 
                            I thrive on the intersection of design and development. With each project,
                            I aim not only to meet but to surpass user expectations, constantly seeking
                            ways to innovate and refine my skills.
                        </p>
        
                        <p>
                            Driven by a relentless desire to keep learning and evolving in my
                            craft, I am eager to take on a challenge in this quest to keep on
                            learning new skills and techniques as well as hone existing ones.   
                        </p>
                    </div>

                    <p className='space' />
                    <p className='line' />

                    <p className='section-title'>Timeline</p>
                    <div>
                        <p className='work-duration'>October 2023 - March 2024</p>
                        <p className='work-role'>
                            SheCodes Foundation 
                            <span> {' '}
                                <a target='_blank' title='View Profile' href='http://shecodes.io/graduates/101982-faridah-faizul'>
                                    <Icon.PersonVcard color='grey' size={18}/>
                                </a>
                            </span>
                        </p>
                        <p className='work-location'>Online workshops by SheCodes</p>
                    </div>
                    <p className='space' />
                    <div>
                        <p className='work-duration'>May 2023 - June 2023</p>
                        <p className='work-role'>
                            Google UX Design Certificate
                            <span> {' '}
                                <a target='_blank' title='View Certificate' href='https://www.coursera.org/account/accomplishments/professional-cert/2FTQP99CRYVA'>
                                    <Icon.CardText color='grey' size={18}/>
                                </a>
                            </span>
                        </p>
                        <p className='work-location'>Online Course by Coursera</p>
                    </div>
                    <p className='space' />
                    <div>
                        <p className='work-duration'>December 2021 - January 2023</p>
                        <p className='work-role'>Developer - Software Engineer</p>
                        <p className='work-location'>UST Global - Remote</p>
                    </div>
                    <p className='space' />
                    <div>
                        <p className='work-duration'>May 2021 - November 2021</p>
                        <p className='work-role'>Apprenticeship under Khazanah Nasional Short-Term Employment Programme (“MySTEP 2021”)</p>
                        <p className='work-location'>UST Global - Remote</p>
                    </div>
                    <p className='space' />
                    <div>
                        <p className='work-duration'>September 2020 - December 2020</p>
                        <p className='work-role'>Information Technology Intern</p>
                        <p className='work-location'>Kuala Lumpur Kepong Berhad (KLK)</p>                  
                    </div>
                    
                    <p className='space add-space' />
                    <p className='line' />

                </div>
            </Col>
        </Row>
    </div>
    </div>
  );
}