import "../node_modules/uikit/dist/css/uikit.min.css";
import '../styles/globals.scss';
import UIKit from "../components/UIKit";

function MyApp({ Component, pageProps }) {
  return (
    <UIKit>
      <Component {...pageProps} />
    </UIKit>
  )
}

export default MyApp
