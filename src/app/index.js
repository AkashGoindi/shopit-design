import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';

import Routers from "./routers";
import { Reducer } from "./reducers";
import "./styles/common.css";

function App() {
  const store = createStore( Reducer );
  return (
    <Provider store={store}>
      <Routers/>
    </Provider>
  );
}

export default App;
