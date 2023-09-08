import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import FormContext from './Components/Forms/FormContext.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormContext>
      <App />
    </FormContext>
  </React.StrictMode>,

)