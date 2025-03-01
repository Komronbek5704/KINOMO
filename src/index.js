import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTk2ODhjM2YzMGI0ZGQ0YzNmMzM5ZDc4MjA5NTAyMCIsIm5iZiI6MTcyMzg0NTMxMi44NjcsInN1YiI6IjY2YmZjYWMwNTQ0NTk1ODk5MjQ5ZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BoFPjO5745Od6dhYxSXXJoSHYo5N8JtPB97ccwflFYs"}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
