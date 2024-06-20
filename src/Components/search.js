import React from 'react'

export default function search(props) {
  return (
        <>
            <div style={{textAlign:"left", position:"relative", left:"90px"}}>
                <h4><b>Type city name...</b></h4>
                    <div className='search-box' >        
                        <input 
                            className='form-control bg-transparent mt-4' 
                            type='text' 
                            name='city'
                            value={props.city}
                            onChange={props.change}
                            id='city' 
                            placeholder='City name...'
                        ></input>
                        <button onClick={props.searchCity} className='btn btn-primary'>Search</button>
                        <br/>
                        <h4 style={{textAlign:"center"}}>Or</h4>
                        {/* <h4><b>Get Co-ordinate <button className='btn fa-solid fa-location-crosshairs' onClick={props.getLocation}></button></b></h4> */}
                        <div className='mt-3'style={{display:"flex"}}>
                            <div className='bg-dark text-white rounded' style={{padding:"10px"}}>Lat :</div>
                            <input 
                                style={{marginRight:"30px"}}
                                className='bg-transparent' 
                                type='number'
                                step='any'
                                name='lat'
                                value={props.lat}
                                onChange={props.change}
                                id='lat'
                            ></input>
                            <div className='bg-dark text-white rounded' style={{padding:"10px"}}>Lon :</div>
                            <input 
                                style={{marginRight:"30px"}} 
                                className='bg-transparent'
                                type='number'
                                step='any'
                                name='lon'
                                value={props.lon}
                                onChange={props.change}
                                id='lon'
                            ></input>
                            <button onClick={props.search} className='btn btn-primary fa fa-search'></button>
                        </div>

                    </div>
            </div>
        </>
  )
}
