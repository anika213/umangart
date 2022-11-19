
import {useState, useEffect} from 'react';
import axios from 'axios';
export function Test(){

const [values, setvalues] = useState([]);
let x = [];
let cell_val = "B3";
useEffect(() => {
    const getvals = async () => {
      await axios.get('https://sheetdb.io/api/v1/przstjwsr5qnn/cells/'+cell_val)
      .then(
        response => setvalues(response.data))
    }

})
    return values[cell_val];
}

