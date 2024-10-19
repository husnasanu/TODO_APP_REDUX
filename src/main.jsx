import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { todoStore } from './slices/todoStore.js'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>  <Provider store={todoStore} >   <App />  </Provider></BrowserRouter>
  </StrictMode>,
)
