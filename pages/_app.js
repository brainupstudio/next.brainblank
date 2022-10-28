import UIKit from "../lib/UIKit";
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <UIKit>
      <Component {...pageProps} />
    </UIKit>
  )
}

export default MyApp
