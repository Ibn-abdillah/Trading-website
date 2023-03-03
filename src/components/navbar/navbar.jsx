import './navbar.css'

import { FaCoins } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='navbar'>
       <h1><FaCoins /><span>Coins</span>Search</h1>
      <div className="content">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p>24h</p>
        <p className='mobile'>Volume</p>
        <p className='mobile'>Mkt Cap</p>
      </div>
    </div>
  )
}

export default Navbar