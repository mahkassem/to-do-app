import "@/styles/globals.css";
import { CookiesProvider } from 'react-cookie';

import store from "@/store";

import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </CookiesProvider>
  );
}
