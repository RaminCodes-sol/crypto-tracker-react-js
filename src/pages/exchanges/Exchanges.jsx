import './index.scss'
import useAxios from "../../hooks/useAxios"
import Exchange from "../../components/exchange/Exchange"
import Loading from '../../components/loading/Loading'
import React from 'react'


const Exchanges = () => {
  const { response } = useAxios('/exchanges')
  const exchanges = response

  if (!response) return <Loading />

  
  return (
    <section className='exchanges-wrapper'>

      <div className='exchanges'>
        <div className='exchanges_title'>
          <h2>Exchanges</h2>
        </div>  

        <table className='exchanges_table'>
          <tbody>
            <tr className='table_header'>
              <th>#</th>
              <th>Exchange</th>
              <th>Score</th>
              <th>volume(24h)</th>
              <th data-mobile>Country</th>
            </tr>
            {
              exchanges?.map((exchange, indx) => React.Children.toArray(<Exchange id={indx + 1} exchange={exchange} />) )
            }
          </tbody>
        </table>
      </div>
    
  </section>
  )
}

export default Exchanges

