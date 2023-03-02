import React from 'react'

function CoinCard(props) {
  return (
    <div>
       <div className="content items">
        <p>{props.data.market_cap_rank}</p>
        <div className='name'>
        <p>{props.data.name}</p>
        <p><img src={props.data.image} /></p>
        </div>
        <p className='detail'>${props.data.price_change_24h.toLocaleString()}</p>
        <p className='detail'>{props.data.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='mobile'>{props.data.total_volume}</p>
        <p className='mobile'>{props.data.market_cap}</p>
      </div>
    </div>
  )
}

export default CoinCard