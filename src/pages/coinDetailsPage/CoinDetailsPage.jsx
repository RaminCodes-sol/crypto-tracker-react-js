import { useParams } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import HistoryChart from '../../components/historyChart/HistoryChart'
import CoinDetails from '../../components/coinDetails/CoinDetails'
import Loading from '../../components/loading/Loading'



const CoinDetailsPage= () => {
  const { coinId } = useParams()
  const { response } = useAxios(`/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)
  const details = response

  
  if (!response) return <Loading />


  const styles = {
    width: '100%',
    maxWidth: '1150px',
    color: '#fff',
    margin: '1rem auto',
    padding: '.7rem',
  }

  return (
    <section style={styles}>
      <CoinDetails details={details} />
      <HistoryChart />
    </section>
  )
}

export default CoinDetailsPage