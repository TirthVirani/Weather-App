import React from 'react'
import { Component } from 'react';
import "./header.css";
import { Link } from "react-router-dom"

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState ({clicked : !this.state.clicked})
  }
  render(){
  return (
    <nav>
        <div id='ln'>
        <a href='/'><label>Weather App</label></a>
        </div>
    <div>
        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><Link to='/'>Home<i className="fa-solid fa-house-user"></i></Link></li>
            <li><Link to='/weather' >Weather<i className="fa-solid fa-cloud"></i></Link></li>
        </ul> 
        
    </div>
    <div id='mobile' onClick={this.handleClick}>
        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    </nav>
  )
}
}

export default Navbar;