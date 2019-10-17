import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSquareRootAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add( faSquareRootAlt);
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
  <FontAwesomeIcon icon="square-root-alt" id="after-globe"/>
  <div id="box-globe">
  <p><b>ON-DEMAND</b><br></br>COMPUTE</p>
  </div>
   </div>
   :<div>
    <FontAwesomeIcon icon="square-root-alt" id="icon-globe"/>
    </div>}
</div>


</div>


);
}
}
export default Globe;
