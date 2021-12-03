import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./admin/themes";
// import App from "./admin/components/App";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./admin/context/LayoutContext";
import { UserProvider } from "./admin/context/UserContext";
import { CookiesProvider } from 'react-cookie';

// redux
import {store} from './app/store'
import {Provider} from 'react-redux'

ReactDOM.render(
<CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <LayoutProvider>
          <UserProvider>
            <ThemeProvider theme={Themes.default}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </UserProvider>
        </LayoutProvider>
      </BrowserRouter>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
