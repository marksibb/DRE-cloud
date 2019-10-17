import React, { Component } from 'react';

import '../App.css';

class InnerCloud extends Component{
  render(){
return(
  <div className= "app">

    <div id="big_boy"></div>
    <div id="big_boy2"></div>
    <img id="cloud-before" src={require("../img/vector-cloud.png")}></img>
      
    <img id="dre" src={require("../img/AridhiaDRE.png")}></img>
    </div>



);
}
}
export default InnerCloud;
