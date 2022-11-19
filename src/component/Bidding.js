async function bid(props){


    const data1 = await axios.get('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00');
    var artpiece = props.name;
    console.log(data1.data[1]);
    let value = prompt('How much would you like to bid for this piece(in SGD)?');
    if(value<=parseInt(data1.data[0].artpiece)){
        alert("Your bid is not higher than the current highest bid. Please bid again!")
        window.location.reload(false);
        
        
    }
    else{
        await axios.patch('https://sheet.best/api/sheets/fc6ca0ac-a732-4799-a7b3-07c62c693c00/2', {[artpiece]: String(CheckCookie("name"))});
        Upload_to_sheets(data1, artpiece,value);
    
}
}