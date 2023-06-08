import './index.scss'
import { currencyFormat } from '../../utils/utils'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { useMyContext } from '../../context/Context';




const Coin = ({ coin, watchlist }) => {
  const { removeFromWatchlist } = useMyContext()

  
  return (
    <tr className='table_coin' data-state={`${watchlist && 'table_coin-on-watchlist'}`}>
        <td className='coin-rank'>
            {coin.market_cap_rank}
        </td>

        <td className='coin-image'>
            <Link to={`/coinDetails/${coin.id}`} state={coin}>
                <img src={coin.image} alt='img' loading='lazy'/>
                <h4>{coin.name}({coin.symbol})</h4>
                <h4 data-mobile>{coin.symbol}</h4>
            </Link>
        </td>

        <td className='coin-price'>
            {currencyFormat(coin.current_price)}
        </td>

        <td className='coin-change24h' style={{color:`${coin.price_change_percentage_24h > 0 ? '#16c784': '#ea3943'}` }}>
            <span>{coin.price_change_percentage_24h > 0 ? <MdArrowDropUp /> : <MdArrowDropDown /> }</span>
            <span>{currencyFormat(coin.price_change_percentage_24h)}%</span>
        </td>

        <td className='coin-marketCap'>
            {currencyFormat(coin.market_cap).slice(0, -3)}
        </td>

        {
            watchlist && (
                <td className='remove-button'>
                    <button onClick={() => removeFromWatchlist(coin.id)}><MdDelete /></button>
                </td>
            )
        }
    </tr>
  )
} 

export default Coin