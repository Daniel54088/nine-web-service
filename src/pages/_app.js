import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store/store';
import "../styles/globals.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Head>
        <title>Nine web service</title>
        <meta name="description" content="Nine web service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </React.Fragment>
    </Provider>
  );
}

export default MyApp;
