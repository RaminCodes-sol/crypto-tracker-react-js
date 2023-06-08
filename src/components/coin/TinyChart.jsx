import useAxios from '../../hooks/useAxios'
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
)




const TinyChart = ({ coinId }) => {
  const { response } = useAxios(`/coins/${coinId}/market_chart?vs_currency=usd&days=7`)


  if (!response) return <p>loading...</p>


    
  const coinChartData = response.prices.map(val => ({
    x: val[0],
    y: val[1].toFixed(2)
  }))


  const options = {
    responsive: true
  }
  
  const data = {
    labels: false,
    datasets: [
      {
        fill: true,
        label: coinId,
        data: coinChartData.map(value =>  value.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#3861fb',
      }
    ]
  }

  return (
    <Line options={options} data={data} />
  )
}

export default TinyChart