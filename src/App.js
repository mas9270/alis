import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layouts from './components/layouts/layouts';
import Store from './store/Store';
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "./assets/scss/custom.css"


//App
export default function App() {

  return (
    <>
      <BrowserRouter >
        <Provider store={Store}>
          <HelmetProvider>
            <Helmet>
              <title>ALIS</title>
            </Helmet>
            <div className='App' dir="rtl">
              <Layouts />
            </div>
          </HelmetProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

