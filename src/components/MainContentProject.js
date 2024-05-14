import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

export default function MainContentProject() {
    return (  
    <>
       <div className='grid'> 
            <div className='grid-item'>
                <a href='https://annes-bakery.netlify.app/' target='_blank' rel='noreferrer' className='profile-link'>
                    <div className='card'>
                        <Row>
                            <Col sm={4}>
                                <Image className='project-image' src='.\images\works\annesbakery.png' alt='Annes Bakery Website' />
                            </Col>
                            <Col sm={7}>                    
                                <h1 className='project-name small-project-word'>
                                    Anne's Bakery website
                                    <span> <Icon.BoxArrowInUpRight color='#983961' size={18}/></span>
                                </h1>
                                <p className='project-details small-project-word'>
                                    A responsive website that is still in development. The design is being made from one of
                                    the projects done during Google UX Design Certificate journey
                                </p>
                                <ul className='project-tech small-project-word'>
                                    <li className='project-tech-list'>HTML</li>
                                    <li className='project-tech-list'>CSS</li>
                                    <li className='project-tech-list'>Bootstrap</li>
                                    <li className='project-tech-list'>React</li>
                                    <li className='project-tech-list'>Netlify</li>
                                    <li className='project-tech-list'>Github</li>
                                </ul>      
                            </Col>
                            <Col sm={1} className='small-column-hidden'></Col>
                        </Row>   
                    </div>
                </a>
            </div>
            <div className='grid-item'>
                <a href='https://v1-faridahfaizul.netlify.app/' target='_blank' rel='noreferrer' className='profile-link'>
                    <div className='card'>
                        <Row>
                            <Col sm={4}>
                                <Image className='project-image' src='.\images\works\portfolio.png' alt='FaridahFaizul Portfolio' />
                            </Col>
                            <Col sm={7}>                    
                                <h1 className='project-name small-project-word'>
                                    faridahfaizul.netlify.app(v1)
                                    <span> <Icon.BoxArrowInUpRight color='#983961' size={18}/></span>
                                </h1>
                                <p className='project-details small-project-word'>An old portfolio responsive website</p>
                                <ul className='project-tech small-project-word'>
                                    <li className='project-tech-list'>HTML</li>
                                    <li className='project-tech-list'>CSS</li>
                                    <li className='project-tech-list'>Netlify</li>
                                    <li className='project-tech-list'>Github</li>
                                </ul>      
                            </Col>
                            <Col sm={1} className='small-column-hidden'></Col>
                        </Row>   
                    </div>
                </a>
            </div>
            <div className='grid-item'>
                <a href='https://faridahfaizul.000webhostapp.com/' target='_blank' rel='noreferrer' className='profile-link'>
                    <div className='card'>
                        <Row>
                            <Col sm={4}>
                                <Image className='project-image' src='.\images\works\dentalclinic.png' alt='Dental Clinic' />
                            </Col>
                            <Col sm={7}>                    
                                <h1 className='project-name small-project-word'>
                                    Project done at UST Global
                                    <span> <Icon.BoxArrowInUpRight color='#983961' size={18}/></span>
                                </h1>
                                <p className='project-details small-project-word'>
                                    Build a dynamic website which consist of 
                                    user-site and admin-site that I create targeting the dental industry. 
                                    This project aims to have good data management where the data from this
                                    project is received from its own database
                                </p>
                                <ul className='project-tech small-project-word'>
                                    <li className='project-tech-list'>HTML</li>
                                    <li className='project-tech-list'>CSS</li>
                                    <li className='project-tech-list'>Bootstrap</li>
                                    <li className='project-tech-list'>Javascript</li>
                                    <li className='project-tech-list'>PHP</li>
                                    <li className='project-tech-list'>CodeIgniter</li>
                                    <li className='project-tech-list'>Github</li>
                                </ul>      
                            </Col>
                            <Col sm={1} className='small-column-hidden'></Col>
                        </Row>   
                    </div>
                </a>
            </div>
            <div className='hide-content grid-item'>
                <a href='https://www.instagram.com/aiskrimbyeyla/' target='_blank' rel='noreferrer' className='profile-link'>
                    <div className='card'>
                        <Row>
                            <Col sm={4}>                                            
                                 <Image className='project-image' src='.\images\works\aiskrim-by-eyla.png' alt='Aiskrim Malaysia by Eyla' />
                            </Col>
                            <Col sm={7}>                    
                                <h1 className='project-name small-project-word'>
                                    Design for Aiskrim Malaysia by Eyla
                                    <span> <Icon.BoxArrowInUpRight color='#983961' size={18}/></span>
                                </h1>
                                <p className='project-details small-project-word'>
                                    Work with client to design social media post, banner and product
                                    image to promote products for client's customers
                                </p>
                                <ul className='project-tech small-project-word'>
                                    <li className='project-tech-list'>Microsoft Powerpoint</li>
                                    <li className='project-tech-list'>Canva</li>
                                </ul>      
                            </Col>
                            <Col sm={1} className='small-column-hidden'></Col>
                        </Row>   
                    </div>
                </a>
            </div>
            <div className='grid-item'>
                <a href='https://drive.google.com/file/d/1ZBswRq40xSUvfX8K8crMOBVnVDm9Dott/view' target='_blank' rel='noreferrer' className='profile-link'>
                    <div className='card'>
                        <Row>
                            <Col sm={4}>                                            
                                 <Image className='project-image' src='.\images\works\diyfar.png' alt='DIYfAR' />
                            </Col>
                            <Col sm={7}>                    
                                <h1 className='project-name small-project-word'>
                                    DIYfAR Mobile Application
                                    <span> <Icon.BoxArrowInUpRight color='#983961' size={18}/></span>
                                </h1>
                                <p className='project-details small-project-word'>
                                    Do-It-Yourself (DIY) furniture based on augmented reality approach 
                                    (DIYfAR) is proposed to help user to build a furniture with the use of AR platform.
                                    This application focus on using markerless system technique, and user can design 
                                    the furniture that they intended to build, view it in real-time and receive information in 
                                    order to build the furniture
                                </p>
                                <ul className='project-tech small-project-word'>
                                    <li className='project-tech-list'>Blender</li>
                                    <li className='project-tech-list'>Unity</li>
                                </ul>      
                            </Col>
                            <Col sm={1} className='small-column-hidden'></Col>
                        </Row>   
                    </div>
                </a>
            </div>
            <a href='archive' className='project-archive'>View all project <Icon.ChevronRight color='#983961' size={25} /></a> 
        </div> 
    </>
    );
}