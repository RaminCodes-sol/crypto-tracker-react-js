import './index.scss'
import { Link } from 'react-router-dom'


const TrendingCoin = ({ coin }) => {

  return (
    <Link to={`coinDetails/${coin.id}`} state='trending-coin' className='trending-coin'>
    
      <img src={coin.large || coin.small || coin.thumb} alt='img' />

      <div className='trending-coin_name'>
        <small>Coin</small>
        <h4>{coin.symbol}</h4>
      </div>
      
      <div className='trending-coin_rank'>
        <small>Rank</small>
        <h4>{coin.market_cap_rank}</h4>
      </div>

      <div></div>

    </Link>
  )
}

export default TrendingCoin