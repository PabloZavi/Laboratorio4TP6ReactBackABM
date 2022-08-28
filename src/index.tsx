import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { BrowserRouter } from 'react-router-dom';
import { Productos } from './componentes/Productos';
import AppRutas from './AppRutas';

//// <App /> <AppRutas /> <AppCocina />
//En la línea 16 definimos qué archivo tsx queremos que inice, podemos usar App (App.tsx --> contador y login)
//o AppCocina (AppCocina.tsx --> delivery)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      
    <AppRutas /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
