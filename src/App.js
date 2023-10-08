import './App.css';
import iconimagen from "./assets/img/img.png";
import sponsorimg from "./assets/img/sponser.png";
import icono1 from "./assets/img/Frame.png";
import icono2 from "./assets/img/Frame2.png";
import icono3 from "./assets/img/Frame3.png";
import icono4 from "./assets/img/Frame4.png";
import Cards from './components/cards.jsx';
import logoimg from "./assets/img/logo.png"
import imagen2 from "./assets/img/img2.png"
import InfoT from './components/InfoT';
import video from "./assets/img/video.png";
import imagen3 from "./assets/img/Mask_Group-removebg-preview.png";
import Title from './components/Title';
import Tutorialcards from './components/Tutorialcards';
import imgtutorial from "./assets/img/img-tutorial1.png"
import imgtutorial2 from "./assets/img/img-tutorial2.png"
import imgtutorial3 from "./assets/img/img-tutorial3.png"


function App() {
  

  return (
    <div className="App">
      <nav className="navegacion">
        <img className="log" src={logoimg} alt="logo" />
        <ul className='navegation'>
          <li ><a href='/'>Home</a></li>
          <li><a href='/'>Advertise</a></li>
          <li><a href='/'>Support</a></li>
          <li><a href='/'>Contact</a></li>
          <li><a href='/'>About us</a></li>
        </ul>
        <a href='/' className="register">Register Now</a>
      </nav>
      <main className="container">
        <div className="welcome">
          <h1 className="hello">Great software is built with amazing developers</h1>
          <p className="info">We help and manage a team of word-class<br />developers to bring your vision to life</p>
          <input type="text" name="subscribe" id="box" placeholder="Subscribe newsletter" />
          <button className="subscribe" >Subscribe</button>
          <img className="sponsor" src={sponsorimg} alt="sponsor" />
        </div>
        <div className='img-phone'>
          <img className="picture" src={iconimagen} alt="imagen" />
        </div>
      </main>
      <section className='information'>
        <Title 
        op="Quality Features"
        op2="Meet exciting features of app"/>
        <div className='container-cards'>
          <Cards imagen={icono1} titlecard="unlimited Custumization"/>
          <Cards imagen={icono2} titlecard="unlimited Custumization"/>
          <Cards imagen={icono3} titlecard="unlimited Custumization"/>
          <Cards imagen={icono4} titlecard="unlimited Custumization"/>
        </div>
        <div className='container2'>
          <img className='picture2' src={imagen2} alt='imagen2' />
          <InfoT
        
          info="Boost your agencies by choosing Ninga Developers"
          data="Create cusrom landig pages with Shades that conver more visitors than any website, no coding requiered"
          lista="Unlimited desing possibility"
          lista2="Completely responsie features"
          lista3="Easy to customize plugins"
          direccion="/"/>    
        </div>
        
      </section>
      <section >
        <div className='seccion'>
          <h4>Leading companies trust us to develop software</h4>
          <p>We believe its important form everyone to have access to software especially when it comes to digital learning be navigate.</p>
          <a href='/'>Explore Details</a>
          
        </div>
        <div className='video-container'>
          <img className='video' src={video} alt='video'/>
        </div>
  
        <div className='container3'>
          <img className='picture' src={imagen3} alt='imagen2' />

          <InfoT
          
          info="Free Customer Support to ensure what you like to expec"
          data="We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfield, we`ll refun payment or fix issues on our dime period customers."
          lista="If you are happy with the developer and wish to continue. If you are unsatisfied, we'll refund payment or fix issues."  
          direccion="/"/>    
        </div>
      </section>
      <section className='container-tutorial'>
        <Title 
        op="Quality Features"
        op2="Tutorials that people love most"/>
        <div className='tj'>
          <Tutorialcards 
          direccion="/"
          img_tutorial={imgtutorial}
          title="How to work whit prototype desing with adobe xd featuring tools"/>
          <Tutorialcards 
          direccion="/"
          img_tutorial={imgtutorial2}
          title="Create multiple artboard by using figma prototyping development"/>
          <Tutorialcards 
          direccion="/"
          img_tutorial={imgtutorial3}
          title="Convert your web layout theming easy with sketch zepling extension"/>
        </div>
        <div className='container-bar'>
          <div>
            <h5>Hire the word's best developers and desing around!</h5>
          </div>
          <button>HIRE DEVELOPERS</button>
        </div>
        
      </section>
      <footer>
      <img src={logoimg} alt="logo" />
        <ul className='list-mobile'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Adversite</a></li>
          <li><a href='/'>Supports</a></li>
          <li><a href='/'>Marketing</a></li>
          <li><a href='/'>FAQ</a></li>
        </ul>
      </footer>
      
    </div>
  );
}

export default App;
