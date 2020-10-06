// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { useStore } from "../src/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
