import pic1 from './images/pic1.jpg';
import './App.css';
import resume from './Files/Kashish.pdf';

function App() {
  return (
    <div className="App">
      <div class="headers">
        <div class="heading">
            <header>
                <div class="logo">
                    <i class ="fa-solid fa-k "></i>
                    <div class="logotext">Kashish Mehrotra</div>
                </div>
                <nav>
                    <div class="togglebtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="navlinks">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PORTFOLIO</a></li>
                        <li><a href="#main2" target="_blank">RESUME</a></li>
                        <li><a href="#main1" target="_blank">CONTACT ME</a></li>
                    </ul>
                </nav>
            </header>
            <div class="profile">
                <div class="pic">
                <img src={pic1}  alt="This is Kashish Mehrotra" />

                </div>
                <div class="text">
                    <h5>Hi ! I'm a <span className="input">Web Developer</span></h5>
                    <h1> Kashish Mehrotra</h1>
                    <p> I am a B.Tech CSE with spl in AI and Robotics undergrad at Vellore Institute of Technology, Chennai . 
                        I am passionate about Data Structures and Algorithms. My interests include Data Science and Machine Learning. 
                        My hobbies are calligraphy and listening to music.</p>
                    <h5>Experience</h5>
                    <p>
                    I am a Research Intern at Inspire Infosol,Hyderabad where I am working on testing, API , frontend and backend development and AI ML using Figma, Flutter,Jupyter, Swagger,etc. I was also a Web Dev intern at Oasis Infobye where I worked on three projects where I had to create a landing page, 
                    a personal portfolio website and a temperature converter. Apart from this, I also have a project on 
                    grocery management system where I had used and integrated Python and MySQL for frontend and backend purposes, respectively.
                </p>
                   
                        <main class="main2" id="main2">
                          <div class="btngrp">
                            <a href={resume} target="_blank" class="btn active"> View Resume</a>
                            <a href={resume} download  class="btn ">Download Resume</a>
                          </div>
                        </main>
                      <main class="main1" id="main1">
                      
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <a href="www.linkedin.com/in/kashish-mehrotra-089252223" taget="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <p>MADE BY KASHISH MEHROTRA</p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
     </div>
     
    </div>
    
  );
}

export default App;
