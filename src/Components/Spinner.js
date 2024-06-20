import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{margin:'150px'}}>
        <img src={loading} alt="loading"/><br/>
      </div>
    )
  }
}

export default Spinner
