import Header from './header'
import Home from './home'
import Weather from './weather'
import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
            <Header></Header>
                <Routes>
                    <Route path='/weather' element={<Weather></Weather>}></Route>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
        </BrowserRouter>
      </>
    )
  }
}
export default App