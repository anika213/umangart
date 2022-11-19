import Artpic_1 from './Artpics/Artpic_1.png';
import Artpic_2 from './Artpics/Artpic_2.png';
import Artpic_3 from './Artpics/Artpic_3.png';
import Artpic_4 from './Artpics/Artpic_4.png';
import Artpic_5 from './Artpics/Artpic_5.png';
import Artpic_6 from './Artpics/Artpic_6.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReactDOM from 'react-dom';
import ModalImage from "react-modal-image";
import classes from './Display.css';
import React, { useState, useEffect} from 'react';
import Navbar from './Navbar.js';
import { Button, Form, Container, Header,  } from 'semantic-ui-react'
import Login from './Login.js'
import axios from 'axios';
import Navbar_repeat from './Navbar_repeat';
import { CheckCookie } from './Landing';
import {exp1} from './Highestbids';
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
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {Painting6: String(CheckCookie("name"))});
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








function Display()
{  
const [High1, setHigh1] = useState([]);
const [High2, setHigh2] = useState([]);
const [High3, setHigh3] = useState([]);
const [High4, setHigh4] = useState([]);
const [High5, setHigh5] = useState([]);
const [High6, setHigh6] = useState([]);




 async function readDataBids() {
        const data1 = await axios.get('https://api.sheetson.com/v2/sheets/Sheet1/2',{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer H7DYCORk0wct22BQ7FIrsSG1jurdzy2lja7o-TPKEnW_iOlGQBhdtqErNPU',
              'X-Sheetson-Spreadsheet-Id': '1UJtukE44q7Pm_MRbDZNwPBD4UFK9Ud2V75K-jq7FUas'
            }
          })
          return (data1.data);
          
        }


    useEffect(() => {
        const interval = setInterval(() => {
        
         readDataBids()
         .then((response) => {
            setHigh1(response.Painting1);
            setHigh2(response.Painting2);
            setHigh3(response.Painting3);
            setHigh4(response.Painting4);
            setHigh5(response.Painting5);
            setHigh6(response.Painting6);
            
             })

        
   },5000);
   return() =>clearInterval(interval);
}, []);



        
            return(

                <div id="root">   
                    <Navbar_repeat></Navbar_repeat>
                    <h1> Art Gallery</h1>
                <Container fluid className="container">
                    <img src={Artpic_1} alt="Painting 1" 
                    class="image1" 
                    onClick={alert1}/>
                    <p>Journey by Sona Arora</p>
                    <p1>Current Highest bid: <span class="colortext">{High1}</span></p1>
                    <br></br>
                    <br></br>
                    <button onClick={bid1} class = "button1">Place a bid </button>
                </Container>
                    <br></br>
                    <br></br>
                <Container fluid className="container"> 
                    <img src={Artpic_2} alt="Painting 2"
                     class="image2"
                     onClick={alert2}/>
                    <p>Bharatnatyam by Deepa Remani</p>
                    <p1>Current Highest bid: <span class="colortext">{High2}</span></p1>
                    <br></br>
                    <br></br>
                    <button onClick={bid2} class = "button1">Place a bid </button>
                </Container>
                    <br></br>
                    <br></br>
                <Container fluid className="container"> 
                    <img src={Artpic_3} alt="Painting 3" 
                    class="image1"
                    onClick={alert3}/>
                    <p>Childhood by Anita Yang(G11)</p>
                    <p1>Current Highest bid: <span class="colortext">{High3}</span></p1>
                    <br></br>
                    <br></br>
                    <button onClick={bid3} class = "button1">Place a bid </button>
                </Container>
                <br></br>
                <br></br>
                <Container fluid className="container"> 
                    <img src={Artpic_4} alt="Painting 4" 
                    class="image2"
                    onClick={alert4}
                    />
                    <p>Buddha's Reflections by Milan Khatri</p>
                    <p1>Current Highest bid: <span class="colortext">{High4}</span></p1>
                    <br></br>
                    <br></br>
                    <button onClick={bid4} class = "button1">Place a bid </button>
                </Container>
                <br></br>
                <br></br>
                <Container fluid className="container"> 
                    <img src={Artpic_5} alt="Painting 3" 
                    class="image3"
                    onClick={alert5}/>
                    <p>Ocean of Brilliance! by Arppanaa John Yogesh</p>
                    <p1>Current Highest bid: <span class="colortext">{High5}</span></p1>
                    <br></br>
                    <br></br>
                    <button onClick={bid5} class = "button1">Place a bid </button>
                </Container>
                <br></br>
                <br></br>
                <Container fluid className="container"> 
                    <img src={Artpic_6} alt="Painting 3" class="image2"/>
                    <p>Back in time by Sanjana Krishna</p>
                    <p1>Current Highest bid: <span class="colortext">{High6}</span></p1>
                    <br></br>
                    <br></br>
                    <button onClick={bid6} class = "button1">Place a bid </button>
                </Container>
               
               
                  </div>
                )
        








    
      
             
   
}

export default Display;

