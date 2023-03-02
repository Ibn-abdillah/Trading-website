import axios from 'axios';
import React, { useEffect, useState } from 'react';

import CoinCard from './coincard';

import './content.css';

function Content() {
    const [data, setData] = useState([])
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  
    
    useEffect(() => {
      axios.get(url).then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },[])
  
    if (!data) return null
    console.log(data);

  return (
    <div className='coins'>
      {data.map(data => {
        return <CoinCard data={data} key={data.id} />
      })}
    </div>
  )
}

export default Content