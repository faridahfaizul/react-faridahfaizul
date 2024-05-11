import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function AllProjects() {
    return (  
        <Container>
            <a href='/' className='project-archive'><Icon.ChevronLeft color='#983961' size={25} /> Faridah Faizul</a> 
            <h1 className='archive-title'>All Projects</h1>
            <p className='space' />
            
            <Table responsive className='archive-table'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Project Name</th>
                        <th>Technologies</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023</td>
                        <td className='archive-name'>Personal Website V1</td>
                        <td>
                            <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>HTML</li>
                                <li className='archive-tech-list'>CSS</li>
                                <li className='archive-tech-list'>Netlify</li>
                                <li className='archive-tech-list'>Github</li>
                            </ul>   
                        </td>
                        <td>
                            <a href='https://v1-faridahfaizul.netlify.app/' target='_blank' rel='noreferrer' className='archive-link'>
                                v1-faridahfaizul.netlify.app/ <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td className='archive-name'>DentalClinic project</td>
                        <td>
                             <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>HTML</li>
                                <li className='archive-tech-list'>CSS</li>
                                <li className='archive-tech-list'>Bootstrap</li>
                                <li className='archive-tech-list'>Javascript</li>
                                <li className='archive-tech-list'>PHP</li>
                                <li className='archive-tech-list'>CodeIgniter</li>
                                <li className='archive-tech-list'>Github</li>
                            </ul> 
                        </td>
                        <td>
                            <a href='https://faridahfaizul.000webhostapp.com/' target='_blank' rel='noreferrer' className='archive-link'>
                                faridahfaizul.000webhostapp.com <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td className='archive-name'>Clicom UX Design</td>
                        <td>
                             <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>Figma</li>
                                <li className='archive-tech-list'>Mobile app & responsive website design</li>
                            </ul> 
                        </td>
                        <td>
                            <a href='https://www.figma.com/proto/nq8B0HmyuYmQbdhrUDRcwq/Clicom-MobileApp-%26-RW?type=design&node-id=15-1661&t=rwcipfARfbgTzyHk-1&scaling=scale-down&page-id=15%3A1401&starting-point-node-id=15%3A1615' target='_blank' rel='noreferrer' className='archive-link'>
                                figma.com/clicom <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td className='archive-name'>Anne's Bakery UX Design</td>
                        <td>
                             <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>Figma</li>
                                <li className='archive-tech-list'>Responsive website design</li>
                            </ul> 
                        </td>
                        <td>
                            <a href="https://www.figma.com/proto/iP08zTOzjs7JOoS9WHMGo8/Anne's-Bakery-Responsive-Website?type=design&node-id=50-2&t=GrJmfwVBAD3XWfCD-1&scaling=scale-down&page-id=4%3A2321&starting-point-node-id=50%3A2" target='_blank' rel='noreferrer' className='archive-link'>
                                figma.com/annesbakery <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td className='archive-name'>Artliys UX Design</td>
                        <td>
                             <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>Figma</li>
                                <li className='archive-tech-list'>Mobile app design</li>
                            </ul> 
                        </td>
                        <td>
                            <a href="https://www.figma.com/proto/L3GaimVdEhZBMkWrvT52aZ/Artliys-Mobile-App?type=design&node-id=285-594&scaling=scale-down&page-id=285%3A76" target='_blank' rel='noreferrer' className='archive-link'>
                                figma.com/artliys <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td className='archive-name'>Design for Aiskrim Malaysia by Eyla</td>
                        <td>
                             <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>Microsoft Powerpoint</li>
                                <li className='archive-tech-list'>Canva</li>
                            </ul> 
                        </td>
                        <td>
                            <a href="https://www.instagram.com/aiskrimbyeyla/" target='_blank' rel='noreferrer' className='archive-link'>
                                instagram.com/aiskrimbyeyla <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                     <tr>
                        <td>2019</td>
                        <td className='archive-name'>DIYfAR Mobile Application</td>
                        <td>
                             <ul className='archive-tech small-project-word'>
                                <li className='archive-tech-list'>Unity</li>
                                <li className='archive-tech-list'>Blender</li>
                            </ul> 
                        </td>
                        <td>
                            <a href="https://drive.google.com/file/d/1ZBswRq40xSUvfX8K8crMOBVnVDm9Dott/view" target='_blank' rel='noreferrer' className='archive-link'>
                                apk-file @ google drive <Icon.BoxArrowInUpRight color='#983961' size={18}/>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}