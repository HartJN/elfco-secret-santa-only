import './styles/index.scss'
import './styles/_theme.scss'

import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CreateEvent from './pages/CreateEvent/CreateEvent'
import Dashboard from './pages/Dashboard/Dashboard'
import EventDetail from './pages/EventDetail/EventDetail'
import Home from './pages/Home/Home'
import InvitePage from './pages/InvitePage/InvitePage'
import RemovedFeature from './pages/RemovedFeature/RemovedFeature'
import SSHome from './pages/SecretSantaHome/SSHome'
import Wishlist from './pages/Wishlist/Wishlist'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.headerApp}>
        <Navbar />
      </header>
      <main className={styles.mainApp}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/secretsanta' element={<SSHome />} />
          <Route path='/event' element={<CreateEvent />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/:event_id' element={<EventDetail />} />
          <Route path='/wishlist/:id' element={<Wishlist />} />
          <Route path='/invite/:invite_id' element={<InvitePage />} />
          <Route path='/removedfeature' element={<RemovedFeature />} />
        </Routes>
      </main>
      <footer className={styles.footerApp}>
        <Footer />
      </footer>
    </div>
  )
}

export default App
