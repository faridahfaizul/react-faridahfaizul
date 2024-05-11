import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StickySideBar from './StickySideBar';
import MainContent from './MainContent';

export default function Home() {
    return (        
        <div className='container'>
            <div className='small-device'>
               <Row>                          
                    <Col sm={1} className='small-column-hidden'></Col>
                    <StickySideBar />
                    <Col sm={1} className='small-column-hidden'></Col>           
                    <MainContent />
                </Row>
            </div>
        </div>
    );
}