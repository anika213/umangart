import classes from './Highestbids.css'
import { BrowserRouter, json, renderMatches, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Component } from 'react'
import Navbar_repeat from './Navbar_repeat';
import React, { useEffect, useState } from "react";
import useInterval from 'use-interval'
import axios from 'axios';
import h1 from './Display';
import {Getsheets} from './Getsheets'
import {Bids} from './Getsheets'


let x = false;

function Highestbids(){



const [High1, setHigh1] = useState([]);
const [High2, setHigh2] = useState([]);
const [High3, setHigh3] = useState([]);
const [High4, setHigh4] = useState([]);
const [High5, setHigh5] = useState([]);
const [High6, setHigh6] = useState([]);
const [High7, setHigh7] = useState([]);
const [High8, setHigh8] = useState([]);
const [High9, setHigh9] = useState([]);
const [High10, setHigh10] = useState([]);
const [High11, setHigh11] = useState([]);
const [High12, setHigh12] = useState([]);


const [Bidder1, setBidder1] = useState([]);
const [Bidder2, setBidder2] = useState([]);
const [Bidder3, setBidder3] = useState([]);
const [Bidder4, setBidder4] = useState([]);
const [Bidder5, setBidder5] = useState([]);
const [Bidder6, setBidder6] = useState([]);
const [Bidder7, setBidder7] = useState([]);
const [Bidder8, setBidder8] = useState([]);
const [Bidder9, setBidder9] = useState([]);
const [Bidder10, setBidder10] = useState([]);
const [Bidder11, setBidder11] = useState([]);
const [Bidder12, setBidder12] = useState([]);




 async function readDataBids() {
        const data1 = await axios.get('https://api.sheetson.com/v2/sheets/Sheet1/2',{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 7MtAA1Ja9plcv00rqwHS7A9DRPEfP6kUW_9SN4ITQjMYaeIK0dIN0ypF479FHw',
              'X-Sheetson-Spreadsheet-Id': '1UJtukE44q7Pm_MRbDZNwPBD4UFK9Ud2V75K-jq7FUas'
            }
          })   
          console.log(data1.data);
          return (data1.data);
          
        }

    async function readDataBidders() {
            const data2 = await axios.get('https://api.sheetson.com/v2/sheets/Sheet1/4',{
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer 7MtAA1Ja9plcv00rqwHS7A9DRPEfP6kUW_9SN4ITQjMYaeIK0dIN0ypF479FHw',
                  'X-Sheetson-Spreadsheet-Id': '1UJtukE44q7Pm_MRbDZNwPBD4UFK9Ud2V75K-jq7FUas'
                }
              })
              return (data2.data);
              
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
            setHigh7(response.Painting7);
            setHigh8(response.Painting8);
            setHigh9(response.Painting9);
            setHigh10(response.Painting10);
            setHigh11(response.Painting11);
            setHigh12(response.Painting12);
            
             })

        readDataBidders()
        .then((response) =>{
                setBidder1(response.Painting1);
                setBidder2(response.Painting2);
                setBidder3(response.Painting3);
                setBidder4(response.Painting4);
                setBidder5(response.Painting5);
                setBidder6(response.Painting6);
                setBidder7(response.Painting7);
                setBidder8(response.Painting8);
                setBidder9(response.Painting9);
                setBidder10(response.Painting10);
                setBidder11(response.Painting11);
                setBidder12(response.Painting12);


        }
        )
        
   },6000);
   return() =>clearInterval(interval);
}, []);





    return(
        <div>
     <Navbar_repeat> </Navbar_repeat>
     <h1> Highest Bids</h1>
     <div class="bidstext">
        <p><span class="bluetext">Journey by Sona Arora:</span> <span class="boldtext">{High1}</span> Bid By {Bidder1}</p>
        <p><span class="bluetext">Bharatnatyam by Deepa Remani:</span> <span class="boldtext">{High2}</span>  Bid By {Bidder2}</p>
        <p><span class="bluetext">Childhood by Anita Yang:</span> <span class="boldtext">{High3}</span>  Bid By {Bidder3}</p>
        <p><span class="bluetext">Budha's Reflections by Milan Khatri:</span> <span class="boldtext">{High4}</span>  Bid By {Bidder4}</p>
        <p><span class="bluetext">Ocean of Brilliance by Arrpanaa John Yogesh:</span> <span class="boldtext">{High5}</span>  Bid By {Bidder5}</p>
        <p><span class="bluetext">Aasha Ki Kiran by Sanjana Krishna</span>: <span class="boldtext">{High6}</span>  Bid By {Bidder6}</p>
        <p><span class="bluetext">Yunnan Impression: The Blooming of Chinese Hibiscus by Peng Yaling:</span> <span class="boldtext">{High7}</span>  Bid By {Bidder7}</p>
        <p><span class="bluetext">Monet's Gardens Impression: Water Lily by Peng Yaling</span> <span class="boldtext">{High8}</span>  Bid By {Bidder8}</p>
        <p><span class="bluetext">Good Times by Aparna Chakravarty</span> <span class="boldtext">{High9}</span>  Bid By {Bidder9}</p>
        <p><span class="bluetext">The Nameless Buddha by Peng Yaling</span> <span class="boldtext">{High10}</span>  Bid By {Bidder10}</p>
        <p><span class="bluetext">The Dunhuang Buddha Statue by Peng Yaling</span>: <span class="boldtext">{High11}</span>  Bid By {Bidder11}</p>
        <p><span class="bluetext">Let There Be Light by Shailaja Poddar</span>: <span class="boldtext">{High12}</span>  Bid By {Bidder12}</p>
     </div>
     
        </div>
    )


}

export  {Highestbids};