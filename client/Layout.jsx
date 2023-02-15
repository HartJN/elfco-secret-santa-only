import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>{<Navbar />}</header>
      <main>{children}</main>
      <footer>{<Footer />}</footer>
    </div>
  )
}

export default Layout
