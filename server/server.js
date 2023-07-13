const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.listen(3000, ()=>{

    console.log("gata sef");
    
});

app.use(express.static(path.join(__dirname, '../')));



app.get('/', (req, res) => {
    
    
    res.sendFile(path.join(__dirname, '../index.html'));
  });


    
  

  
    

    

   



