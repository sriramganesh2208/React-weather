
import { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [data,setData] =useState([]);

  const [location,setLocation] =useState('');

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  
  const handle=(e)=>{
      setLocation(e.target.value)
  }

  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
        
        <div className='search'>
          <input className='sea' value={location} onKeyPress={search} onChange= {handle}type='text' placeholder='   Enter the Location'></input>
        </div>
        
        <div className='container'>
          <div className='top'>
            <div className='location'>
                <h2>{data.name}</h2>
            </div>

            <div className='temp'>
    {data.main ? <h1>{data.main.temp}°F</h1> : null}
       </div>

        
          </div>
          
          
          <div className='bottom'>
            <div className='feels'>
{data.main ? <h4>{data.main.feels_like}</h4> :  null}
    <p>Feels Like</p>
            </div>

            <div className='humidity'>
{data.main ? <h4>{data.main.humidity}</h4> : null}
<p>Humidity</p>
            </div>

            <div className='wind-speed'>
{data.wind ? <h4>{data.wind.speed}</h4> : null}
<p>Wind</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
