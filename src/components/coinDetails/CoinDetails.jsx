import './index.scss'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../loading/Loading';
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineExternalLink, HiOutlineStar, HiStar } from "react-icons/hi";
import { useMyContext } from '../../context/Context';




const CoinDetails = ({ details }) => {
  const { addToWatchlist, coinsWatchlist, removeFromWatchlist } = useMyContext()
  const location = useLocation()
  const coin = location.state

  
  if(!details) return <Loading />
  

  return (
    <section className='coinDetails-wrapper'>

      {/*-------Header-------*/}
      <div className='coinDetails_header'>
        <Link to='/'>Cryptocurrencies</Link>
        <span><MdKeyboardArrowRight /></span>
        <span>{details.name}</span>
      </div>


      {/*-------Title-------*/}
      <div className='coinDetails_title'>
        <div className='title_content'>
          <img src={details.image.large} alt='img' />
          <h1>{details.name}</h1>
          <span>{details.symbol}</span>
          {
            location.state === 'trending-coin' ? '' : (
              coinsWatchlist.some(coin => coin.id === details.id) 
                ? (<button title='Add to Watchlist' onClick={() => removeFromWatchlist(details.id)}>{<HiStar style={{color: 'gold'}} />}</button>) 
                : (<button title='Add to Watchlist' onClick={() => addToWatchlist(coin)}>{<HiOutlineStar />}</button>)
            )
          }
        </div>

        <div className='title_rank'>
          <span>Rank {details.coingecko_rank}#</span>
        </div>
        
        <div className='title_links'>
          <a href={details.links.homepage[0]} target='_blank' rel='noopener noreferrer'>
            website<HiOutlineExternalLink/>
          </a>
          <a href={details.links.repos_url.github[0]}>
            source code<HiOutlineExternalLink/>
          </a>
        </div>
      </div>


      {/*-------Description-------*/}
      <div className='coinDetails_description'>
        <p dangerouslySetInnerHTML={{ __html: details.description.en }}></p>
      </div>

    </section>
  )
}

export default CoinDetails
