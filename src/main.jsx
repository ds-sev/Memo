import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from './store/configureStore'
import App from './components/App/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
