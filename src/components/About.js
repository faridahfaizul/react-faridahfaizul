import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

export default function About() {
  return (
    <div>
      <div className='parent-img'>
        <div className='container'>
          <div className='jumbotron-big jumbotron-small'>
            <div className='element'>
              <h1>about me</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='about'>
          <h1 className='content-intro'>hi there,</h1>
          <div className='content-desc'>
            <p>
              I specialize in crafting <strong>Front-End</strong> websites as a 
              <strong> Software Developer</strong>, with a portfolio of personal 
              projects showcased in my works section.
            </p>
  
            <p>
              My expertise extends to <strong>UX Design</strong>, enhancing my 
              ability to create captivating digital experiences as a web developer.
              My primary aim is to exceed user expectations by delivering engaging 
              and intuitive interfaces.
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
              learning new skills and techniques as well as hone existing ones. I aspire 
              to contribute to a team that values innovation and exceptional design 
              while perpetually advancing my expertise in the field.              
            </p>

            <p>
              Join me on this journey of continuous growth as I explore new techniques, embrace challenges,
              and strive for excellence in every aspect of my work.
            </p>
          </div>

          <p class="space" />
          <p class="line" />

        </div>
      </div>
    </div>
  );
}