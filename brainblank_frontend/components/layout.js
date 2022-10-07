import Navbar from './navbar'
import Footer from './footer'
import styles from '../styles/Home.module.css'

const Layout = ({ children, navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
        <div className={styles.container}>
          <main className={styles.main}>
            <main>{children}</main>
          </main>
        </div>
      <Footer />
    </>
  )
}

export default Layout;