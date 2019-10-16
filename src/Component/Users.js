import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
library.add( faUsers);
class Users extends Component{
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
<div className="users" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeaveHandler}>
{ this.state.isHover
  ?<div>
  <FontAwesomeIcon icon="users" id="after-users"/>
  <div id="box-users">
  <p>BUILT FOR <b>COLLABORATION</b></p>
  </div>
   </div>
   :<div>
    <FontAwesomeIcon icon="users" id="icon-users"/>
    </div>}
</div>


</div>


);
}
}
export default Users;
