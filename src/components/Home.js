import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';
import StickySideBar from './StickySideBar';
import MainContent from './MainContent';

export default function Home() {
    return (        
        <div className='container'>
            <div className='small-device'>
                <Row>
                    <StickySideBar />          
                    <MainContent />
                </Row>
            </div>
        </div>
    );
}