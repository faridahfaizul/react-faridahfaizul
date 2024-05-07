import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

export default function HomeContent() {
    return (
      <div class="App">
        <div class="small-device d-flex justify-content-center section-top">
            <div className=""><Image src={"./images/me.jpg"} roundedCircle className="profile-image" alt="My Image" /></div>
            <div className="small-profile profile">
                <h1 class="profile-title">hello, i'm Faridah</h1>
                <p class="profile_desc">
                    Check out my work as a Front-End focused web developer
                </p>
                <a
                    href="mailto:fsyahirahfaizul@gmail.com"
                    target="_blank"
                    className="profile-link"
                ><Icon.Envelope  color="black" size={35}/></a>
                <a
                    href="https://www.linkedin.com/in/faridahfaizul/"
                    target="_blank"
                    className="profile-link"
                ><Icon.Linkedin  color="black" size={30}/></a>
                <a
                    href="https://github.com/faridahfaizul"
                    target="_blank"
                    className="profile-link"
                ><Icon.Github  color="black" size={30}/></a>
            </div>
        </div>
    </div>
  );
}