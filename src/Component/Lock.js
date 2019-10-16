import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add( faLock);
class Lock extends Component{
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
<div className="lock" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeaveHandler}>
{ this.state.isHover
  ?<div>
  <FontAwesomeIcon icon="lock" id="after-lock"/>
  <div className = "visible">
  <div id = "box-lock">
  <p>PROTECTING<br></br>PRIVACY - <b>GPDR</b></p>
  </div>
  </div>
  </div>
   :<div>
    <FontAwesomeIcon icon="lock" id="icon-lock"/>
    </div>}
</div>


</div>


);
}
}
export default Lock;
