var d3 = require("d3"),
    jsdom = require("jsdom");

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");

const express = require('express');
  
var app = module.exports.app = express(); // Init express

app.get('/', (req, res) => {  
   
  });
  
  
  const server = app.listen(process.env.PORT || 5000, process.env.IP, function(){
     console.log("PCL work Server Has Started!");
     //log.info("PCL work Server Has Started!");
  });