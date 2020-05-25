import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";

const TodoList = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  TodoList,
  document.getElementById('root')
);
