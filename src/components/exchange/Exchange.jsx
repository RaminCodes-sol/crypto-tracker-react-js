import './index.scss'
import { currencyFormat } from '../../utils/utils'




const Exchange = ({ exchange }) => {

  return (
    <tr className='table_exchange'>
        <td className='exchange-rank'>
            {exchange.trust_score_rank}
        </td>

        <td className='exchange-image'>
            <a href={exchange.url} target="_blank" rel='noopener noreferrer'>
                <img src={exchange.image} alt='img' loading='lazy'/>
                <h4>{exchange.name}</h4>
            </a>
        </td>

        <td className='exchange-score'>
            <span style={{ backgroundColor: `${exchange.trust_score >= 6 ? '#16c784' : exchange.trust_score < 4 ? '#ea3943' : '#f5b97f'}` }}>{exchange.trust_score}</span>
        </td>

        <td className='exchange-tradingVolume'>
            {currencyFormat(exchange.trade_volume_24h_btc)}
        </td>

        <td className='exchange-country'>
            {exchange.country ? exchange.country : (<p>unknown</p>)}
        </td>
    </tr>
  )
}

export default Exchange