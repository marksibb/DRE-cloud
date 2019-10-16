import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add( faGlobe);
class Globe extends Component{
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
<div className="globe" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeaveHandler}>
{ this.state.isHover
  ?<div>
  <FontAwesomeIcon icon="globe" id="after-globe"/>
  <div id="box-globe">
  <p>Powerful<br></br>Data Tooling</p>
  </div>
   </div>
   :<div>
    <FontAwesomeIcon icon="globe" id="icon-globe"/>
    </div>}
</div>


</div>


);
}
}
export default Globe;
