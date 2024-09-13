import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Mentor from './component/Mentor';
import Slider from './component/CarouselsSection';
import ProgramFor from './component/Programs';
import OurApproach from './component/OurApproach';
import Resume from './component/Resume';
import ProgramInfo from './component/ProgramInfo';
import Footer from './component/Footer';
import Testimonials from './component/Testimonials';


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#FAF7F0'; 


    // Cleanup the effect by resetting background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
  const phoneStyle = {
    width: '100%',
    overflowX: 'hidden',
  };

// function App() {
  return (
    <div style={phoneStyle}>
<Navbar/>
<HeroSection/>
<Mentor/>
<Slider/>
<Resume/>
<ProgramInfo/>
<ProgramFor/>
<OurApproach/>
<Testimonials/>
<Footer/>
    </div>
   
  );
}

export default App;
