import './App.css';
import React, { Component } from "react";
import ButtonAppBar from './components/header'
import Mainpage from './container/Mainpage/Mainpage';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    };  
  }
  render(){
    return(
    <div className="App" id='form-input-columns'>
      <ButtonAppBar/>
      <Mainpage />
    </div>
  
  );
}
}

export default App;
