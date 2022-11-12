import css from './Layout.module.css'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import Footer from '../footer/Footer'

const Layout = () => {

  return (
       <div className={css.layout}>
            <Navbar />
            <Main />
            <Footer />
        </div>
  )
}

export default Layout