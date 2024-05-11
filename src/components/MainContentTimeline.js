import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function MainContentTimeline() {
    return (  
        <>
            <div>
                <p className='work-duration'>October 2023 - March 2024</p>
                <p className='work-role'>
                    SheCodes Foundation 
                    <span> {' '}
                        <a target='_blank' rel='noreferrer' className='work-icon' title='View Profile' href='http://shecodes.io/graduates/101982-faridah-faizul'>
                            <Icon.PersonVcard size={18}/>
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
                        <a target='_blank' rel='noreferrer' className='work-icon' title='View Certificate' href='https://www.coursera.org/account/accomplishments/professional-cert/2FTQP99CRYVA'>
                            <Icon.CardText size={18}/>
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
        </>
    );
}