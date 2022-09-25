import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import RestautantHolder from "./components/RestautantHolder";

class App extends Component {
  state={
      locationapp:[0,0]
  }
  getlocapp = (latitude,longitude) =>{

      this.setState({
        location:[latitude,longitude]
      })
      console.log(latitude,longitude)
  }
  
  render() {
    return <div style={{backgroundColor:'Black'}}>
    <Navbar/>
    <br></br>
    <Input getfunc={this.getlocapp}/>
    <br></br>
    <RestautantHolder coords={this.state.location}/>
    </div>
  }
}

export default App;