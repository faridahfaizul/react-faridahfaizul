import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

export default function StickySideBar() {
    return (  
        <>        
            <Col sm={1}></Col>
            <Col sm={3}>
                <div className='fixed'> 
                    <Image src={'./images/me.jpg'} roundedCircle className='center-item profile-image' alt='My Image' />                         
                    <div className='small-hidden'>
                        <p className='space'></p>
                        <div className='directory'>                        
                            <a href='#about'><Icon.ArrowRight color='black' size={25}/> about</a>
                            <a href='#timeline'><Icon.ArrowRight color='black' size={25}/> timeline</a>
                            <a href='#projects'><Icon.ArrowRight color='black' size={25}/> projects</a>
                        </div>
                    </div>
                    <div className='center-text profile-social'>
                        <a
                            href='mailto:fsyahirahfaizul@gmail.com'
                            className='profile-links'
                            target='_blank'
                        ><Icon.EnvelopeFill color='black' size={30}/></a>
                        <a
                            href='https://www.linkedin.com/in/faridahfaizul/'
                            className='profile-links'
                            target='_blank'
                        ><Icon.Linkedin color='black' size={25}/></a>
                        <a
                            href='https://github.com/faridahfaizul'
                            className='profile-links'
                            target='_blank'
                        ><Icon.Github color='black' size={25}/></a>                            
                    </div>
                </div>
            </Col>
        </>
    );
}