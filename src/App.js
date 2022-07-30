import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from "./components/City"
import {API_KEY,API_URL} from './config';

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    axios.get(`${API_URL}?q=${search}&appid=${API_KEY}&units=metric`).then((r) => {
      setCity(r.data);
    });
  },[search])

  return (
    <div className="App">
      <div className='bg-slate-300 w-screen h-screen'>
          <div className='drop-shadow-md'>
            <input onChange={(e) => setSearch(e.target.value)} 
            type="text" placeholder="Enter your city" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-96 mt-8"/>
            <City city={city}/>
          </div>
      </div>
      
    </div>
  );
}

export default App;
