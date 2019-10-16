import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFilter, faTools, faGlobe, faLock, faFolder, faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add(faFilter, faTools, faGlobe, faLock, faFolder, faUsers);
class OuterCloud extends Component{
  constructor(props) {
      super(props);

      this.state = {
          isHover: false
      };

      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseOver() {
     this.setState({
         isHover: true
     });
 }

 onMouseLeaveHandler() {
    this.setState({
        isHover: false
    });
}

  render(){
return(
  <div className="app">
  <div className="filter" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeaveHandler}>
  { this.state.isHover
    ?<div>
    <FontAwesomeIcon icon="filter" id="after-filter"/>
    <div id="box-funnel">
    <p>DATA WRANGLING<br></br>USING <b>FAIR PRINCIPLES</b></p>
    </div>
     </div>
     :<div>
      <FontAwesomeIcon icon="filter" id="icon-filter"/>
      </div>}
  </div>






</div>


);
}
}
export default OuterCloud;
