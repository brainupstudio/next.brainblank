import UIKit from "../lib/UIKit";
// import "../node_modules/uikit/dist/css/uikit.min.css";
// import "../node_modules/uikit/src/scss/uikit.scss";
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <UIKit>
      <Component {...pageProps} />
    </UIKit>
  )
}

export default MyApp
