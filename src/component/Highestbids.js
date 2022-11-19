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
import { GetBidders } from './Getsheets';
import {Bids} from './Getsheets'


let x = false;

function Highestbids(){
  var dataBids = Getsheets(); 
  var dataBidders = GetBidders(); 

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

  let Bidder1 = dataBidders.Painting1 
  let Bidder2 = dataBidders.Painting2
  let Bidder3 = dataBidders.Painting3 
  let Bidder4 = dataBidders.Painting4
  let Bidder5 = dataBidders.Painting5 
  let Bidder6 = dataBidders.Painting6
  let Bidder7 = dataBidders.Painting7 
  let Bidder8 = dataBidders.Painting8
  let Bidder9 = dataBidders.Painting9
  let Bidder10 = dataBidders.Painting10
  let Bidder11 = dataBidders.Painting11
  let Bidder12 = dataBidders.Painting12
  let Bidder13 = dataBidders.Painting13
  let Bidder14 = dataBidders.Painting14
  let Bidder15 = dataBidders.Painting15




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
        <p><span class="bluetext">Bauhinia Fantasy by Amae Fung</span> <span class="boldtext">{High13}</span>  Bid By {Bidder13}</p>
        <p><span class="bluetext">Lost in Thought by Ganesh Bhat</span>: <span class="boldtext">{High14}</span>  Bid By {Bidder14}</p>
        <p><span class="bluetext">Forgotten by Surabhi Nigam</span>: <span class="boldtext">{High15}</span>  Bid By {Bidder15}</p>
     </div>
     
        </div>
    )


}

export  {Highestbids};