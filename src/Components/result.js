import React from 'react'
import Spinner from './Spinner'

export default function result(props) { 
  const {weatherData: data, isSearched } = props;
  if (!data) {
    return isSearched ? <Spinner /> : <div className='conatiner'><h5 className='text-center mt-5'>Please search a city...</h5></div>;
  }
  function kToc(k){
    return (k - 273.15).toFixed(2) + "° C";
  }
  function getTheDate(stamp){
    const date = new Date(stamp*1000);
    return date.toLocaleTimeString();
  }
  return (
    <div className='row mt-4' style={{position:"relative", left:"80px"}}>
        <div className='col'>
            <div className='card border-primary bg-transparent'>
                <div className='card-body'>
                    <h4 className='card-title'>
                      <img src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=''/>
                      {data.name} ( {kToc(data.main.temp)} ) <span className='pl-2'>{data.weather[0].description}</span>
                    </h4>
                    <div className='row'>
                      <div className='col'>
                        <div className='row'>
                          <table className='table'>
                            <tbody>
                              <tr>
                                <th>Feels like</th>
                                <td>{kToc(data.main.feels_like)}</td>
                              </tr>
                              <tr>
                                <th>Min Temp.</th>
                                <td>{kToc(data.main.temp_min)}</td>
                              </tr>
                              <tr>
                                <th>Max Temp.</th>
                                <td>{kToc(data.main.temp_max)}</td>
                              </tr>
                              <tr>
                                <th>Sun Rise</th>
                                <td>{getTheDate(data.sys.sunrise)}</td>
                              </tr>
                              <tr>
                                <th>Sun Set</th>
                                <td>{getTheDate(data.sys.sunset)}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}