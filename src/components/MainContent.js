import React from 'react';
import Col from 'react-bootstrap/Col';
import MainContentAbout from './MainContentAbout';
import MainContentTimeline from './MainContentTimeline';
import MainContentProject from './MainContentProject';

export default function MainContent() {
    return (  
        <>        
            <Col sm={1}></Col>      
            <Col sm={7}>
                <div>       
                    <h1 id='about' className='page-title'>hello, i'm Faridah</h1>                 
                    <MainContentAbout />

                    <p className='space' />
                    <p className='line' />

                    <p id='timeline' className='section-title'>Timeline</p>
                    <MainContentTimeline />
                    
                    <p className='space add-space' />
                    <p className='line' />

                    <p id='projects' className='section-title'>Projects</p>
                    <MainContentProject />       
                </div>
            </Col>
        </>
    );
}