import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NodeDiagram from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <NodeDiagram />
)
