import React from 'react';
import './about.css';
import image from '../images/doctors.png';


function About() {
    return(
        <div className = 'about-container'>
            <div className = 'top-container'>
                <div className = 'left-side'>
                    <h1>About Us</h1>
                    <h1 className='faams-header'>FAAMS</h1>
                    <p>Fund African-American Medical Students</p>
                    <button className='involved-btn'>Get Involved</button>
                </div>
                <div className = 'right-side'>
                    <img src = {image} alt = 'signup-image' className = 'about-img' style={{width:'117%'}} />
                </div>
            </div>
            <div className = 'bottom-container'>
                <div className = 'section'>
                    <h2>Our Values</h2>
                    <p>We envision a world where every medical student, regardless of background, has the opportunity to succeed. 
                    By equipping Black students with essential resources, we foster a more diverse and inclusive medical field. 
                    Our goal is to empower future physicians to lead, advocate for underserved communities, and challenge systemic barriers 
                    in medical education and healthcare.</p>
                </div>
                <div className = 'section'>
                    <h2>Our Approach</h2>
                    <ul>
                        <li><strong>Scholarships:</strong> Providing financial support to outstanding minority students who demonstrate academic excellence, leadership, and commitment.</li>
                        <li><strong>Mentorship:</strong> Connecting scholars with experienced medical professionals for guidance and support throughout their medical education.</li>
                        <li><strong>Advocacy:</strong> Promoting greater minority representation in medicine and raising awareness of the challenges these students face.</li>
                    </ul>
                </div>
                <div className = 'section'>
                    <h2>The Future Starts With <strong>YOU</strong></h2>
                    <p>As a new nonprofit, we are laying the foundation to support Black medical students through scholarships and mentorship. 
                        With your help through donations, partnerships, and advocacy, we can make this vision a reality. 
                        Every contribution brings us closer to a more inclusive and representative medical field.</p>
                </div>
            </div>


        </div>
    )



}
export default About;