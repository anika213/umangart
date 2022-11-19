import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Highestbids } from "./Highestbids";
var biddersData;
var bidData;
let x=0;
let y=0;
 export function Getsheets(){
  const [Bids,setBids] = useState([]);
   async function readDataBids() {
    const data1 = await axios.get('https://api.sheetson.com/v2/sheets/Sheet1/2',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7MtAA1Ja9plcv00rqwHS7A9DRPEfP6kUW_9SN4ITQjMYaeIK0dIN0ypF479FHw',
      'X-Sheetson-Spreadsheet-Id': '1UJtukE44q7Pm_MRbDZNwPBD4UFK9Ud2V75K-jq7FUas'
    }
  })
  
  setBids(data1.data);
  x=x+1;
  console.log("Bids :",x);

}
useEffect(() => {
  const interval = setInterval(() => {
    readDataBids();
  
},6000);
return() =>clearInterval(interval);
}, []);

return Bids;

  }
 
export function GetBidders(){
    const [Bidders,setBidders] = useState([]);
    async function readDataBidders() {
      const data2 = await axios.get('https://api.sheetson.com/v2/sheets/Sheet1/4',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 7MtAA1Ja9plcv00rqwHS7A9DRPEfP6kUW_9SN4ITQjMYaeIK0dIN0ypF479FHw',
            'X-Sheetson-Spreadsheet-Id': '1UJtukE44q7Pm_MRbDZNwPBD4UFK9Ud2V75K-jq7FUas'
          }
        })
    
    setBidders(data2.data);
    y=y+1;
    console.log("Bidders :",y);
  
  
  }
  useEffect(() => {
    const interval = setInterval(() => {
      readDataBidders();
    
  },6000);
  return() =>clearInterval(interval);
  }, []);
  
  return Bidders;
  
    }













  /*

  async function readDataBidders() {
    const data2 = await axios.get('https://api.sheetson.com/v2/sheets/Sheet1/4',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 7MtAA1Ja9plcv00rqwHS7A9DRPEfP6kUW_9SN4ITQjMYaeIK0dIN0ypF479FHw',
          'X-Sheetson-Spreadsheet-Id': '1UJtukE44q7Pm_MRbDZNwPBD4UFK9Ud2V75K-jq7FUas'
        }
      })
      console.log(data2.data);

      
    }

    */