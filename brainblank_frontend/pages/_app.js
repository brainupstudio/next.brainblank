import '../styles/globals.css';
import "../node_modules/uikit/dist/css/uikit.min.css";
import UIKit from "../components/uikit";

function MyApp({ Component, pageProps }) {
  return (
    <UIKit>
      <Component {...pageProps} />
    </UIKit>
  )
}

export default MyApp
