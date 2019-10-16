import React, { Component } from 'react';
import InnerCloud from './Component/InnerCloud';
import OuterCloud from './Component/OuterCloud';
import Tools from './Component/Tools';
import Users from './Component/Users';
import Globe from './Component/Globe';
import Folder from './Component/Folder';
import Lock from './Component/Lock';
import './App.css';


class App extends Component{
  render(){
return(
  <div id="cloud">
  <InnerCloud/>
  <OuterCloud/>
  <Tools/>
  <Users/>
  <Globe/>
  <Folder/>
  <Lock/>
  </div>
);
}
}
export default App;
