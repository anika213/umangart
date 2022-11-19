import Artpic_1 from './Artpics/Artpic_1.png';
import Artpic_2 from './Artpics/Artpic_2.png';
import Artpic_3 from './Artpics/Artpic_3.png';
import Artpic_4 from './Artpics/Artpic_4.png';
import Artpic_5 from './Artpics/Artpic_5.png';
import Artpic_6 from './Artpics/Artpic_6.png';
import Artpic_7 from './Artpics/Artpic_7.png';
import Artpic_8 from './Artpics/Artpic_8.png';
import Artpic_9 from './Artpics/Artpic_9.png';
import Artpic_10 from './Artpics/Artpic_10.png';
import Artpic_11 from './Artpics/Artpic_11.png';
import Artpic_12 from './Artpics/Artpic_12.png';
import Artpic_13 from './Artpics/Artpic_13.png';
import Artpic_14 from './Artpics/Artpic_14.png';
import Artpic_15 from './Artpics/Artpic_15.png';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReactDOM from 'react-dom';
import ModalImage from "react-modal-image";
import classes from './Display.css';
import React, { useState, useEffect} from 'react';
import Tabletop from "tabletop";
import Navbar from './Navbar.js';
import { Button, Form, Container, Header,  } from 'semantic-ui-react'
import Login from './Login.js'
import axios from 'axios';
import Navbar_repeat from './Navbar_repeat';
import { CheckCookie } from './Landing';
import {exp1} from './Highestbids';
import { Getsheets } from './Getsheets';
import ImageDisplay from './ImageDisplay';
let rowcount = 1;
let y =0;
export var h1 = 70;
const MySwal = withReactContent(Swal)

   
async function Upload_to_sheets(data1,artpiece,value){

    while (true){
        console.log(data1.data[rowcount].Email);
        console.log(CheckCookie("email"));
        if(data1.data[rowcount].Email==CheckCookie("email")){
            await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/'+String(rowcount), {[artpiece]: String(value)});
             break;

        }
        rowcount+=1;
    }
}


async function bid1(){


    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting1";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting1)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
        
        
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting1: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);
    
}
}

async function bid2(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting2";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting2)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting2: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);


    }

}

async function bid3(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting3";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting3)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting3: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value); 
        
}
}

async function bid4(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting4";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting4)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting4: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}



async function bid5(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting5";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting5)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting5: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}


async function bid6(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting6";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting6)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting6: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}

async function bid7(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting7";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting7)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting7: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}


async function bid8(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting8";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting8)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting8: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}

async function bid9(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting9";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting9)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting9: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}

async function bid10(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting10";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting10)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting10: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}


async function bid11(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting11";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting11)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting11: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}

async function bid12(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting12";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting12)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting12: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}
async function bid13(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting13";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting13)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting13: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}

async function bid14(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting14";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting14)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting14: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}

async function bid15(){
    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = "Painting15";
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].Painting15)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting15: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);    
    }

}











function alert1(){
    
    MySwal.fire({
            title: <strong>Journey by Sona Arora</strong>,
            html:
            <div>
                <span>DESCRIPTION:</span> 
                <br></br>
                <p1>I call my painting journey and for me it's a discovery of self  which I felt is not smooth but beautiful and fulfilling. </p1>
                <br></br>
                <br></br>
                <p1><span>MEDIUM:</span> Acrylic Canvas </p1>
                <br></br>
                <p1><span>THEME:</span> Discovery </p1>
                <br></br>
                <p1><span>SIZE:</span> Approx. A3</p1>
                </div>,
            background:"black",
            width: "50vmax",
            showConfirmButton: false
    
          })  
        
        }


function alert2(){
    
MySwal.fire({
        title: <strong>Bharatnatyam by Deepa Remani</strong>,
        html:
        <div>
            <span>DESCRIPTION:</span> 
            <br></br>
            <p1>Bharatanatyam, one of the oldest dance forms in India, has its origins in the temples of South India. Overtime, it has evolved as a performing art in theatres. This dance form had contributed much to the development of other art forms of India and influenced temple architecture in South India. Thus, it forms a part of India's heritage. </p1>
            <br></br>
            <br></br>
            <p1><span>MEDIUM:</span> Acrylic Canvas</p1>
            <br></br>
            <p1><span>THEME:</span> Heritage </p1>
            <br></br>
            <p1><span>SIZE:</span> 30cm x 40cm</p1>
            </div>,
        background:"black",
        width: "50vmax",
        showConfirmButton: false,
        border: "3px"


      })  
    
    }

function alert3(){
    
        MySwal.fire({
                title: <strong>Childhood by Anita Yang</strong>,
                html:
                <div>
                    <span>DESCRIPTION:</span> 
                    <br></br>
                    <p1>I chose the theme of memories so I think of childhood memories. My childhood memories are very precious that I really miss it. The little girl in the artwork trying to get the ball in the sea, she was on the beach but the sea has receded. She is wearing a little girl dress where everyone has wear it before when they're small and her outfit like her hat and her slippers represent she has a very relaxing and chill time when she is a little girl.</p1>
                    <br></br>
                    <br></br>
                    <p1><span>MEDIUM:</span> Oil paint Canvas </p1>
                    <br></br>
                    <p1><span>THEME:</span> Memories </p1>
                    <br></br>
                    <p1><span>SIZE:</span> Approx. A3</p1>
                    </div>,
                background:"black",
                width: "50vmax",
                showConfirmButton: false
        
              })  
            
            }



    function alert4(){
    
        MySwal.fire({
                title: <strong>Buddha's Reflections by Milan Khatri</strong>,
                html:
                <div>
                    <span>DESCRIPTION:</span> 
                    <br></br>
                    <p1>Growing up as a Hindu in the UK, Hinduism did not penetrate beyond the Indian community. Its only later in life that I came across Buddha, and most starkly in Thailand. I realized that India has a rich and deep heritage, and in the case of Buddha is shared globally. </p1>
                    <br></br>
                    <br></br>
                    <p1><span>MEDIUM:</span> Acrylic Canvas</p1>
                    <br></br>
                    <p1><span>THEME:</span> Heritage </p1>
                    <br></br>
                    <p1><span>SIZE:</span> 51cm x 40cm</p1>
                    </div>,
                background:"black",
                width: "50vmax",
                showConfirmButton: false,
                border: "3px"
        
        
              })  
            
            }


function alert5(){
    
                MySwal.fire({
                        title: <strong>Ocean of Brilliance! by Arppanaa John Yogesh</strong>,
                        html:
                        <div>
                            <span>DESCRIPTION:</span> 
                            <br></br>
                            <p1>Traditional art provides values and beliefs which are passed down through generations. This kind of artwork called ‘Mandala’ is derived from the ancient Sanskrit language which means circles. This is a traditional form of art that is associated with meditation, healing, prayers and therapy. This thought  proving piece of art seems to bring much needed optimism in these times of despondency. </p1>
                            <br></br>
                            <br></br>
                            <p1><span>MEDIUM:</span> Paint, Colour Pencils/Pens (Framed)</p1>
                            <br></br>
                            <p1><span>THEME:</span> Heritage </p1>
                            <br></br>
                            <p1><span>SIZE:</span> 16in x 21in</p1>
                            </div>,
                        background:"black",
                        width: "50vmax",
                        showConfirmButton: false,
                        border: "3px"
                
                
                      })  
                    
                    }

    function alert6(){
    
                        MySwal.fire({
                                title: <strong>Aasha ki Kiran </strong>,
                                html:
                                <div>
                                    <span>DESCRIPTION:</span> 
                                    <br></br>
                                    <p1>Set in the surroundings of the world heritage site Hawa Mahal, this painting encompasses the long lasting tradition of devout piety which for many in India is a way of life. The title Aasha ki Kiran,  denoting 'ray of hope' signifies the artist's fond wish for a better life for the homeless children in Jaipur. </p1>
                                    <br></br>
                                    <br></br>
                                    <p1><span>MEDIUM:</span> Acrylics Canvas</p1>
                                    <br></br>
                                    <p1><span>THEME:</span> Heritage </p1>
                                    <br></br>
                                    <p1><span>SIZE:</span> 14 x 18 inches</p1>
                                    </div>,
                                background:"black",
                                width: "50vmax",
                                showConfirmButton: false,
                                border: "3px"
                        
                        
                              })  
                            
                            }

function alert7(){
    
           MySwal.fire({
                          title: <strong>Yunnan Impression: The Blooming of Chinese Hibiscus </strong>,
                                html:
                                <div>
                                        <span>DESCRIPTION:</span> 
                                            <br></br>
                                            <p1>"To see a world in a grain of sand, And a heaven in a wild flower." - This is a Chinese hibiscus flower I encountered when travelling to the Yunnan province of China. Reflecting on the journey of life, there are always some beautiful things deeply engraved in my heart from a special moment of time.</p1>
                                            <br></br>
                                            <br></br>
                                            <p1><span>MEDIUM:</span> Watercolour (Framed)</p1>
                                            <br></br>
                                            <p1><span>THEME:</span> Memories </p1>
                                            <br></br>
                                            <p1><span>SIZE:</span> 42 x 29.7 cm (without frame)</p1>
                                            </div>,
                                        background:"black",
                                        width: "50vmax",
                                        showConfirmButton: false,
                                        border: "3px"
                                
                                
                                      })  
                                    
    }

    
function alert8(){
    
        MySwal.fire({
                       title: <strong>Monet's Gardens Impression: Water Lily </strong>,
                             html:
                             <div>
                                     <span>DESCRIPTION:</span> 
                                         <br></br>
                                         <p1>I visited Monet's garden on a trip to Europe a few years ago to see the beauty of light and shadow, and discovered the beautiful scene of a water lily blooming silently in his world-famous pond. Great beauty knows no borders, and I would also like to dedicate this painting to one of my favorite Impressionist painter, Claude Monet.</p1>
                                         <br></br>
                                         <br></br>
                                         <p1><span>MEDIUM:</span> Watercolour (Framed)</p1>
                                         <br></br>
                                         <p1><span>THEME:</span> Discovery </p1>
                                         <br></br>
                                         <p1><span>SIZE:</span> 39 x 27 cm (without frame)</p1>
                                         </div>,
                                     background:"black",
                                     width: "50vmax",
                                     showConfirmButton: false,
                                     border: "3px"
                             
                             
                                   })  
                                 
 }

 function alert9(){
    
    MySwal.fire({
                   title: <strong>Good Times </strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1>Memories. Joyful memories, good memories. That's what my painting depicts. There are small glitches, grey and black areas but they are far too less and the colourful ones outnumber the darker memories. I am thankful for these good times that I keep looking back on, from time to time.</p1>
                                     <br></br>
                                     <p1><span>MEDIUM:</span> Acrylic (acrylic pour, acrylic paint, acrylic ink)</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Memories </p1>
                                     <br></br>
                                     <p1><span>SIZE:</span> 45cm x 60cm</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }


function alert10(){
    
    MySwal.fire({
                   title: <strong>The Nameless Buddha</strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1> Buddhist culture has a long history and far-reaching influence in Asia. In China, there are numerous grottoes and Buddha culture scattered in various famous mountains and rivers, such as the Longmen Grottoes, Dunhuang Mogao Grottoes and so on. These solemn Buddha statues, overlooking all living beings with a compassionate attitude, have silently experienced countless wind and rain in the long river of time.</p1>
                                     <br></br>
                                     <br></br>
                                    
                                     <p1><span>MEDIUM:</span> Watercolour</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Heritage </p1>
                                    <br></br>
                                     <p1><span>SIZE:</span> 42 x 29.7 cm (without frame)</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }
 
 function alert11(){
    
    MySwal.fire({
                   title: <strong>The Dunhuang Buddha Statue</strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1>The artwork portrays a small Buddha statue. It is known as one of the most beautiful painted Buddha statues in Dunhuang, and it is found in Cave 45 of the Mogao Grottoes. The Buddha's expression is soft and his smile gives a sense of calmness and happiness to all its audiences.</p1>
                                     <br></br>
                                     <br></br>
                                     <p1><span>MEDIUM:</span> Watercolour</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Heritage </p1>
                                     <br></br>
                                     <p1><span>SIZE:</span> 16 x 12 cm (without frame)</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }

 function alert12(){
    
    MySwal.fire({
                   title: <strong>Let There Be Light</strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1 class="poemsize"> Ambling down slowly, on a clear balmy night.<br></br>
                                        With a gentle breeze blowing, and the weather just right!<br></br>
                                        The night sky grew brighter, towards the approaching site, <br></br>
                                        With a thousand lit lanterns, floating as if in flight. <br></br>
                                        Bright vibrant orbs soaring, at differing heights, <br></br>
                                        Throwing quick moving shadows, like little dancing sprites. <br></br>
                                        A scene to remember, a most captivating sight. <br></br>
                                        Myriads of shapes, like a sky studded with kites, <br></br>
                                        ith a feeling most tranquil & a stargazer’s delight, <br></br>
                                        I almost heard a soft whisper…. ‘Let there be light!’ </p1>
                                     <br></br>
                                     <br></br>
                                     <p1>An ode to Singapore’s ethos of a rich, multicultural heritage, racial harmony and religious tolerance. This work of art has been inspired by Shailaja’s most enduring memories of Singapore when she moved here over many years back, fascinated by the vibrant cultural enclaves of Chinatown, Little India and Geylang Serai. While reflecting on the vast differences in Singapore’s thriving communities, she marvelled at just how beautifully they intertwined to form a bright, colourful tapestry, making what is today - Singapore’s own unique culture. Besides, with amazement, she noticed how similar they were in their deep reverence for their own culture while being respectful towards that of the others. Of the few customs that they all had in common, one stood out, in particular. The practice of lighting lanterns during festivals has been an integral part of Chinese, Indian, Malay and Eurasian traditions. Believed to bring in spiritual illumination and enlightenment, lanterns have long symbolized ‘hope in despair’ and the ‘victory of good over evil’. In this piece, she brings together traditional Chinese, Malay, Indian, Thai, Vietnamese and Christmas lanterns, to make a colourful vignette exuding auspiciousness, hope and positivity.</p1>
                                     <br></br>
                                     <br></br>
                                     <p1><span>MEDIUM:</span> Acrylic Canvas</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Heritage </p1>
                                     <br></br>
                                     <p1><span>SIZE:</span> 23"X33"</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }
 function alert13(){
    
    MySwal.fire({
                   title: <strong>Bauhinia Fantasy</strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1>Bauhinia Fantasy depicts my favourite parts of Hong Kong culture woven together into a crown. In times when I miss my home away from home, I find comfort in dreaming about all the things that make Hong Kong so special. The culture and legacy of Hong Kong have shaped me into who I am today, and I’m eager to celebrate that in my art!</p1>
                                     <br></br>
                                     <br></br>
                                     <p1><span>MEDIUM:</span> Acrylic Canvas</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Heritage </p1>
                                     <br></br>
                                     <p1><span>SIZE:</span> A2 (16.5 x 23.4 inches)</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }
 function alert14(){
    
    MySwal.fire({
                   title: <strong>Lost in Thought</strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1>The painting is a replication of Michelangelo's 'David' in a modern style of Louis Jover. I also wanted to use colours which represent India(orange). It relates to the theme of 'Memories' as it is a replica of an old masterpiece.</p1>
                                     <br></br>
                                     <br></br>
                                     <p1><span>MEDIUM:</span> Acrylic on Wood</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Memories </p1>
                                     <br></br>
                                     <p1><span>SIZE:</span> 600cm x 495cm</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }

 function alert15(){
    
    MySwal.fire({
                   title: <strong>Forgotten</strong>,
                         html:
                         <div>
                                 <span>DESCRIPTION:</span> 
                                     <br></br>
                                     <p1>Our heritage is filled with old forts and antique buildings. Forgotten yet standing strong, this artwork depicts the charismatic heritage of Indian architecture.</p1>
                                     <br></br>
                                     <br></br>
                                     <p1><span>MEDIUM:</span> Acrylic Canvas</p1>
                                     <br></br>
                                     <p1><span>THEME:</span> Heritage </p1>
                                     <br></br>
                                     <p1><span>SIZE:</span> 30 x 40 cm</p1>
                                     </div>,
                                 background:"black",
                                 width: "50vmax",
                                 showConfirmButton: false,
                                 border: "3px"
                         
                         
                               })  
              
 }
 

 
 
 








function Display()
{
    let dataBids = Getsheets();
    let High1 = dataBids.Painting1
    let High2 = dataBids.Painting2
    let High3 = dataBids.Painting3
    let High4 = dataBids.Painting4
    let High5 = dataBids.Painting5
    let High6 = dataBids.Painting6
    let High7 = dataBids.Painting7
    let High8 = dataBids.Painting8
    let High9 = dataBids.Painting9
    let High10 = dataBids.Painting10
    let High11 = dataBids.Painting11
    let High12 = dataBids.Painting12
    let High13 = dataBids.Painting13
    let High14 = dataBids.Painting14
    let High15 = dataBids.Painting15

        
            return(

                <div id="root">   
                    <Navbar_repeat></Navbar_repeat>
                    <h1> Art Gallery</h1>
                    <ImageDisplay image={Artpic_1} title="Journey by Sona Arora" size="image3" bid={High1} alert={alert1} placebid ={bid1}></ImageDisplay>
                    <ImageDisplay image={Artpic_2} title="Bharatnatyam by Deepa Remani"  size="image2" bid={High2} alert={alert2} placebid ={bid2}></ImageDisplay>
                    <ImageDisplay image={Artpic_3} title="Childhood by Anita Yang" bid={High3}  size="image3" alert={alert3} placebid ={bid3}></ImageDisplay>
                    <ImageDisplay image={Artpic_4} title="Buddha's Reflections by Milan Khatri"  size="image2" bid={High4} alert={alert4} placebid ={bid4}></ImageDisplay>
                    <ImageDisplay image={Artpic_5} title="Ocean of Brilliance! by Arppanaa John Yogesh"  size="image3" bid={High5} alert={alert5} placebid ={bid5}></ImageDisplay>
                    <ImageDisplay image={Artpic_6} title="Back in time by Sanjana Krishna" bid={High6}  size="image2" alert={alert6} placebid ={bid6}></ImageDisplay>
                    <ImageDisplay image={Artpic_7} title="Yunnan Impression: The Blooming of Chinese Hibiscus by Peng Yaling"  size="image2" bid={High7} alert={alert7} placebid ={bid7}></ImageDisplay>
                    <ImageDisplay image={Artpic_8} title="Monet's Gardens Impression: Water Lily by Peng Yaling"  size="image2" bid={High8} alert={alert8} placebid ={bid8}></ImageDisplay>
                    <ImageDisplay image={Artpic_9} title="Good Times by Aparna Chakravarty"  size="image2" bid={High9} alert={alert9} placebid ={bid9}></ImageDisplay>
                    <ImageDisplay image={Artpic_10} title="The Nameless Buddha by Peng Yaling"  size="image2" bid={High10} alert={alert10} placebid ={bid10}></ImageDisplay>
                    <ImageDisplay image={Artpic_11} title="The Dunhuang Buddha Statue by Peng Yaling"  size="image2" bid={High11} alert={alert11} placebid ={bid11}></ImageDisplay>
                    <ImageDisplay image={Artpic_12} title="Let There Be Light by Shailaja Poddar" size="image2" bid={High12} alert={alert12} placebid ={bid12}></ImageDisplay>
                    <ImageDisplay image={Artpic_13} title="Bauhinia Fantasy by Amae Fung"  size="image2" bid={High13} alert={alert13} placebid ={bid13}></ImageDisplay>
                    <ImageDisplay image={Artpic_14} title="Lost in Thought by Ganesh Bhat"  size="image2" bid={High14} alert={alert14} placebid ={bid14}></ImageDisplay>
                    <ImageDisplay image={Artpic_15} title="Forgotten by Surabhi Nigam" size="image2" bid={High15} alert={alert15} placebid ={bid15}></ImageDisplay>
               
                
               
               
                  </div>
                )
        








    
      
             
   
}

export default Display;

