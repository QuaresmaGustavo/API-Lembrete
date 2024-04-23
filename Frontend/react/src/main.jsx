import React from 'react'
import ReactDOM from 'react-dom/client'

import NewLembrete from './components/NewLembrete.jsx'
import ListaLembrete from './components/ListaLembrete.jsx'

import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewLembrete />
    <ListaLembrete/>
  </React.StrictMode>,
)