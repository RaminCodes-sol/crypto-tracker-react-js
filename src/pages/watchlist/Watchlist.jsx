import './index.scss'
import Coin from "../../components/coin/Coin"
import { useMyContext } from "../../context/Context"
import { useNavigate, Link  } from 'react-router-dom'
import { GoHome } from "react-icons/go"



const Watchlist = () => {
  const { coinsWatchlist, removeAllFromWatchlist } = useMyContext()
  const navigate = useNavigate();

  
  if (!coinsWatchlist.length) {
    return (
      <div>
        <h4 style={{color: '#fff', textAlign: 'center', marginTop: '3rem'}}>no item saved</h4>
        <button style={{margin: '1.3rem auto', backgroundColor: 'transparent', fontSize: '1.1rem'}}>
          <Link to='/' style={{color: '#fff', fontSize: '1.8rem', fontWeight: '700'}}>{<GoHome />}</Link>
        </button>
      </div>
    )
  }

  
  return (
    <section className='watchList-wrapper'>
      <div className='watchList'>

        <div className='watchList_title'>
          <h2>Watchlist</h2>
        </div>  

        <table className='watchList_table'>
          <tbody>
            <tr className='table_header'>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h %</th>
              <th data-mobile>Market Cap</th>
            </tr>
            {
              coinsWatchlist?.map((coin) => <Coin key={coin.id} coin={coin} watchlist={true} />)
            }
          </tbody>
        </table>

        {
          coinsWatchlist.length > 0 && (
            <div className='remove-all-button'>
              <button onClick={() => {
                removeAllFromWatchlist()
                navigate('/')
              }}>Remove All</button>
            </div>
          )
        }

      </div>
    </section>
  )
}

export default Watchlist