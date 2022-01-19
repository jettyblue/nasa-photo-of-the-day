import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL, API_KEY } from './constants';

import Copyright from './components/Copyright';
import Explanation from './components/Explanation';
import Image from './components/Image';

import "./App.css";

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
    }
      fetchData();
  }, [])


  return (
    <div className="App">
      <h1>
        NASA Astronomy Picture of the Day! <span role="img" aria-label='go!'>🚀</span>
      </h1>
      <Image nasaURL={nasaData.url} />
      <Explanation expl={nasaData.explanation} />
      <Copyright cpright={nasaData.copyright} />
    </div>
  );
}

export default App;
