import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

const Layout = ({ children, navigation, page}) => {
  return (
    <>
      <Navbar navigation={navigation} page={page} />
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