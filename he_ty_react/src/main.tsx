import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Morning from "./Morning.tsx";
import Lotto from "./Lotto.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Lotto />
  </StrictMode>,
)
