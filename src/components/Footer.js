import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <div className='container'>
      <Row>
        <Col sm={8}></Col>    
        <Col sm={4}>                
          <div className='container'>
            <footer className='footer'>
              <p>
                Coded in
                <a href='https://code.visualstudio.com/' target='_blank'> Visual Studio Code </a>
                by
                <a href='https://faridahfaizul.netlify.app' target='_blank'> Faridah Faizul</a>
                . Built with
                <a href='https://react.dev/' target='_blank'> React.js </a>                    and
                <a href='https://getbootstrap.com/' target='_blank'> Bootstrap</a>
                , is on
                <a href='https://github.com/faridahfaizul/react-faridahfaizul' target='_blank'> GitHub </a>
                and hosted with
                <a href='https://www.netlify.com/' target='_blank'> Netlify</a>.
              </p>
            </footer>
          </div>
        </Col>
      </Row>
    </div>
  );
}