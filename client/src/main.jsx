import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './components/Admin/store.js'; 
import './index.css';
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
