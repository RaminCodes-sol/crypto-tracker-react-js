import './index.scss'
import useAxios from "../../hooks/useAxios"
import Coin from '../coin/Coin'
import Loading from '../loading/Loading'



const Market = () => {
  const { response } = useAxios('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const coins = response

  if (!response) return <Loading />

  return (
    <section className='markets-wrapper'>

      <div className='markets'>
        <div className='markets_title'>
          <h2>Markets</h2>
        </div>  

        <table className='markets_table'>
          <tbody>
              <tr className='table_header'>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>24h %</th>
                <th data-mobile>Market Cap</th>
              </tr>
              {
                coins?.map((coin) => <Coin key={coin.id} coin={coin} />)
              }
          </tbody>
        </table>
      </div>
      
    </section>
  )
}

export default Market