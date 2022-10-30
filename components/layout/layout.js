import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

const Layout = ({ children, navigation, settings, thisPage}) => {
  return (
    <>
      <Navbar navigation={navigation} thisPage={thisPage} settings={settings} />
        <div className={styles.container}>
          <main className={styles.layout}>
            <main>{children}</main>
          </main>
        </div>
      <Footer />
    </>
  )
}

export default Layout;