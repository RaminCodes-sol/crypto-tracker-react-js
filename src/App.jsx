
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/homePage/HomePage'
import CoinDetailsPage from './pages/coinDetailsPage/CoinDetailsPage'
import Exchanges from './pages/exchanges/Exchanges'
import Watchlist from './pages/watchlist/Watchlist'



function App() {

  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/coinDetails/:coinId' element={<CoinDetailsPage />} />
        <Route path='exchanges' element={<Exchanges />} />
        <Route path='watchlist' element={<Watchlist />} />
      </Routes>
    </div>
  )
}

export default App
