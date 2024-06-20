import React, { Component } from 'react'
import Search from './search';
import Result from './result'
import Recent from './recent';
import axios from 'axios';

class weather extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        lat: "",
        lon: "",
        isSearched: false,
        weatherData: null,
        city: "", 
        recent: [],
      }
    }
    changeHandler = (event) =>{
        const name = event.target.name;
        if(name === "city"){
            this.setState({
                city: event.target.value,
            })
        }else if(name === "lat"){
            this.setState({
                lat: event.target.value,
            })
        }else if(name === "lon"){
            this.setState({
                lon: event.target.value,
            })
        }
    };
    searchByCity = () => {
        this.setState({
            isSearched: true,
            weatherData: null,
        });
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=491d5b107d48f273ad66c02b4bef5fea`)
            .then((result) => {
                this.setState({
                    city: result.data.name,
                    weatherData: result.data,
                }, () => {
                    this.addDataToRecent();
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    researchHandler = (lat,lon,city) =>{
        this.setState({weatherData: null}, ()=>{});
        this.setState({lat,lon,city}, () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&q=${this.state.city}&appid=491d5b107d48f273ad66c02b4bef5fea`)
            .then((result) => {
                this.setState({
                    city: result.data.name,
                    weatherData: result.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }
    searchHandler = () => {
        this.setState({
            isSearched: true,
            weatherData: null,
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=491d5b107d48f273ad66c02b4bef5fea`)
            .then((result) => {
                this.setState({
                    city: result.data.name,
                    weatherData: result.data,
                }, () => {
                    this.addDataToRecent();
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    addDataToRecent = () =>{
        let recent = this.state.recent;
        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city,
        });
        this.setState({ recent}, () => {
            window.localStorage.setItem("recent",JSON.stringify(this.state.recent)); //object to string convert and add into localstorage
        });
    };
    componentDidMount(){
        const data = window.localStorage.getItem("recent");
        let recent = data === null ? [] : JSON.parse(data) //sting to object convert
        this.setState({ recent }); //add data into recent
    }
    locationHandler = () =>{
        this.setState({
            lat: "",
            lon: "",
            city: "",
            isSearched: true,
            weatherData: null,
        })
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res) =>{
                    setTimeout(() => {
                        this.setState({
                            lat: res.coords.latitude,
                            lon: res.coords.longitude,
                            // city: res.coords.heading,
                            // 21.2402176
                            // 72.8891392
                        });
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=21.2402176&lon=72.8891392&appid=491d5b107d48f273ad66c02b4bef5fea`)
                        .then((result) => {
                            this.setState({
                                city: result.data.name,
                                weatherData: result.data,
                            }, () => {
                                this.addDataToRecent();
                            });
                            })
                        .catch(
                            (error) => {
                                console.log(error);
                            });
                    }, 500)   
                },
                (error) =>{
                    console.log(error)
                }
            )
        }else{
            console.log("Location is not supported");
        }
    }
  render() {
    return (
      <div className='container mb-4 mt-3' style={{height:"500px"}}>
        <Recent
            research={this.researchHandler }
            recent={this.state.recent}
        ></Recent>
        <Search 
            lat = {this.state.lat}
            lon = {this.state.lon}
            city = {this.state.city}
            weatherData = {this.state.weatherData}
            change={this.changeHandler}
            getLocation={this.locationHandler}
            search={this.searchHandler}
            searchCity={this.searchByCity}
        ></Search>
        <Result
            isSearched={this.state.isSearched}
            weatherData={this.state.weatherData}
        ></Result>
      </div>
    )
  }
}
export default weather