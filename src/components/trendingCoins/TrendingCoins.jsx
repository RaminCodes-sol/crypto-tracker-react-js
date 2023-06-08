import './index.scss'
import useAxios from "../../hooks/useAxios"
import TrendingCoin from "../trendingCoin/TrendingCoin"
import Loading from '../loading/Loading'



const TrendingCoins = () => {
  const { response } = useAxios('/search/trending')
  const trendingCoins = response && response.coins

  
  if(!response) return <Loading />
  

  return (    
    <section className='trending-coins-wrapper'>
      <div className='title'>
        <h2>Trending Coins in the last 24 hours</h2>
      </div>
      <div className='coins'>
        {
          trendingCoins?.slice(0, 6).map((coin) => <TrendingCoin key={coin.item.coin_id} coin={coin.item} />)
        }
      </div>
    </section>
  )
}

export default TrendingCoins