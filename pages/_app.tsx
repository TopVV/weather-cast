// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { useStore } from "../src/store";
import { ReactElement } from "react";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
