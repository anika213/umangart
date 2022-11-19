
import classes from './Landing.css'
import Title_pic from './Artpics/title_pic.png'
import { BrowserRouter, Route, useNavigate } from "react-router-dom";
import Navbar from './Navbar.js'
import { Navigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Link } from "react-router-dom";
import {Test} from './test';
import Navbar_repeat from './Navbar_repeat';
let user_email;
let user_cookie;

const slideImages = [
  {
    url:'http://www.aliciafoxphotography.com/wp-content/uploads/IMG_4909-Alicia-Fox-Photography.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'http://www.aliciafoxphotography.com/wp-content/uploads/IMG_4676-Alicia-Fox-Photography.jpg',
    caption: 'Slide 2'
  },

  {
    url: 'http://www.aliciafoxphotography.com/wp-content/uploads/IMG_4583-Alicia-Fox-Photography-1170x563.jpg',
    caption: 'Slide 3'
  },

  {
    url: 'http://www.aliciafoxphotography.com/wp-content/uploads/IMG_4589-Alicia-Fox-Photography.jpg',
    caption: 'Slide 4'
  },

];


















// Set cookie (initialise)
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


// Get cookie - check if first visit or not
function getCookie(cname) {
  let name = cname + "=";
  let cookiedoc = document.cookie.split(';');
  for(let i = 0; i < cookiedoc.length; i++) {
    let c = cookiedoc[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Actual function - combines everything
export function CheckCookie(nameoremail) {
  if(nameoremail=="email"){
    let check_email = getCookie("email");
  if (check_email != "") {
      return(check_email);
    }
 else 
    return(false);

  }
  else
{
  let check_user = getCookie("username");
  if (check_user != "") {
      return(check_user);
    }
 else 
    return(false);



}
  //let user = getCookie("username");
  
  
    //route to login 
    //user = prompt("Please enter your name:", "");
    //if (user != "" && user != null) {
      //setCookie("username", user, 365);
    

  }



function Landing()
{
    user_cookie = CheckCookie("name");
    if(user_cookie!=false){
      return(
        <div> 
        <Navbar_repeat></Navbar_repeat>
        <br></br>
         <br></br>
        <h>UMANG</h>
        <h2>Fall 2022</h2>
        <h3 class ="cookie">Welcome back {user_cookie}</h3>

        <Slide style>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={
                {'backgroundImage': `url(${slideImage.url})`,
                width:"90vw",
                height:"70vh",
                display:"block",
                margin:"auto"}}>
              </div>
            </div>
          ))} 
        </Slide>

        <h1>About i-india</h1>
        <p style={
                {
                fontFamily:"garamond",
                paddingLeft:50,
                paddingRight:50,
                lineHeight:1.6
                }}>I-India is an organisation that provides holistic care for over 3000 street children in Jaipur, India. Therefore, your contribution and participation is deeply appreciated, especially during the aftermath of the coronavirus pandemic. All funds raised will support i-india’s 
                programmes which provide children from marginalised communities in Jaipur with access to shelter, education, nutrition, 
                medical care and vocational training skills. Umang started as an effort to use art, creativity, and imagination to positively 
                impact those in less privileged areas, specifically in Jaipur, India. Our aim was not only to raise funds for our NGO partner, 
                but to connect the UWC community on a wider level and showcase the talent across the different age groups. 
                The art competition Umang this year received around 70 submissions ranging from junior to high school, all of which is 
                displayed in the Main Plaza for viewing. The engagement with the exhibition has been remarkable, and we hope this event 
                can use art as a way to contribute to a better quality of life for street children in Jaipur whilst also highlighting the 
                commendable artistic talent within our own UWC community.

                </p>
          


          
      
  
      </div>





      )

    }
    else
    {
      return(
        <div>
        <Navbar></Navbar>
         <br></br>
        <br></br>
        <h>UMANG</h>
        <h2>Fall 2022</h2>
        
        
        <Link to="/login" className="link">Click <span className='colortext'>here</span> to Sign Up</Link> 
        <br></br>
        <br></br>
        
        <Slide style>
        {slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <div style={
            {'backgroundImage': `url(${slideImage.url})`,
            width:"90vw",
            height:"70vh",
            display:"block",
            margin:"auto"}}>
          </div>
        </div>
        ))} 
        </Slide>
        
        <h1>About i-india</h1>
        <p style={
            {
            fontFamily:"garamond",
            paddingLeft:50,
            paddingRight:50,
            lineHeight:1.6
            }}>I-India is an organisation that provides holistic care for over 3000 street children in Jaipur, India. Therefore, your contribution and participation is deeply appreciated, especially during the aftermath of the coronavirus pandemic. All funds raised will support i-india’s 
            programmes which provide children from marginalised communities in Jaipur with access to shelter, education, nutrition, 
            medical care and vocational training skills. Umang started as an effort to use art, creativity, and imagination to positively 
            impact those in less privileged areas, specifically in Jaipur, India. Our aim was not only to raise funds for our NGO partner, 
            but to connect the UWC community on a wider level and showcase the talent across the different age groups. 
            The art competition Umang this year received around 70 submissions ranging from junior to high school, all of which is 
            displayed in the Main Plaza for viewing. The engagement with the exhibition has been remarkable, and we hope this event 
            can use art as a way to contribute to a better quality of life for street children in Jaipur whilst also highlighting the 
            commendable artistic talent within our own UWC community.
        
            </p>
        
        
        
        
        </div>

      )
    
    }
   
}

export default Landing; 
export {user_cookie};