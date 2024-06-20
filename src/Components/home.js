import React from 'react'
import "./home.css"

export default function home() {
  return (
    <div>
        <div className='container'>
            <div className='contest'>
              <p>Weather App <i className="fa-solid fa-smog"></i></p>
              <hr/>
              <span>Welcome to the Weather app</span>
              <br/>
              <br/>
              <a href='/weather'>Check Weather <i class="fa-solid fa-circle-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}
