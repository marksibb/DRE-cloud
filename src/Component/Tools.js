import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add( faTools);
class Tools extends Component{
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
<div className="tools" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeaveHandler}>
{ this.state.isHover
  ?<div>
  <FontAwesomeIcon icon="tools" id="after-tools"/>
  <div id = "box-tools">
  <p>Powerful<br></br>Data Tooling</p>
  </div>
   </div>
   :<div>
    <FontAwesomeIcon icon="tools" id="icon-tools"/>
    </div>}
</div>


</div>


);
}
}
export default Tools;
