import React, { Component } from 'react';

import '../App.css';

class InnerCloud extends Component{
  render(){
return(
  <div>
    <div id="bottom_c"></div>
    <div id="middle_c"></div>
    <div id="right_c"></div>
    <div id="left_c"></div>
    <div id="big_boy"></div>
    <div id="big_boy2"></div>
    <img src={require("../img/whiteDRE.png")}></img>
    </div>



);
}
}
export default InnerCloud;
