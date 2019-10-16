import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add(faFolder);
class Folder extends Component{
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
<div className="folder" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeaveHandler}>
{ this.state.isHover
  ?<div>
  <FontAwesomeIcon icon="folder" id="after-folder"/>
  <div id="box-folder">
  <p>Powerful<br></br>Data Tooling</p>
  </div>
   </div>
   :<div>
    <FontAwesomeIcon icon="folder" id="icon-folder"/>
    </div>}
</div>


</div>


);
}
}
export default Folder;
