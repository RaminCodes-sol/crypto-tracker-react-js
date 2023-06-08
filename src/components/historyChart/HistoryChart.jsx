import { useParams } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import Loading from "../loading/Loading"
import moment from "moment/moment"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);




const HistoryChart = () => {
  const { coinId } = useParams()
  const { response } = useAxios(`/coins/${coinId}/market_chart?vs_currency=usd&days=7`)


  if (!response) return <Loading />


  const coinChartData = response.prices.map(val => ({
    x: val[0],
    y: val[1].toFixed(2)
  }))

  
  const options = {
    responsive: true
  }

  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: coinId,
        data: coinChartData.map(value => value.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#3861fb',
      }
    ]
  }


  return (
    <section style={{padding: '0 .5rem'}}> 
      <h1 style={{ fontSize: '1.7rem', textTransform: 'capitalize'}}>{coinId} Chart</h1>
      <Line options={options} data={data} />
    </section>
  )
}

export default HistoryChart