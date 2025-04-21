import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
    const navigate = useNavigate();
    const toAbout = () => {
        navigate('/about');
    }
    const toContact = () => {
        navigate('/contact');
    }
    const toDonate = () => {
        navigate('/donate');
    }
    return (
    <div className='home-img'>
      <div className='home-container'>
        <h1>
          Welcome To <span className="highlight">FAAMS</span>
        </h1>
      </div>
      <div className='cards'>
        <div className='card'>
          <div className='card-content'>
            <h2>Our Mission</h2>
            <p>
              At FAAMS, our mission is simple yet impactful: to provide financial support
              and educational opportunities to black students pursuing a career in medicine.
              We believe that the future of healthcare depends on diversity and representation
              not only within our communities, but nationally and internationally.
            </p>
          </div>
          <div className='card-buttons'>
            <button className='btn light' onClick={toAbout}>About Us</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-content'>
            <h2>About Us</h2>
            <p>
              As a new nonprofit, we are just getting started—but our vision is clear:
              Building the infrastructure and partnerships necessary to provide scholarships
              and support to black medical students. With your help—through donations,
              partnerships, and advocacy—we will bring this vision to life.
            </p>
          </div>
          <div className='card-buttons'>
            <button className='btn mid' onClick={toDonate}>Donate</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-content'>
            <h2>Contact</h2>
            <p>
              If you have any questions about scholarships, our mission, or making a donation,
              we'd love to hear from you!
            </p>
          </div>
          <div className='card-buttons'>
            <button className='btn light' onClick={toContact}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
