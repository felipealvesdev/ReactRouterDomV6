import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <h1>Página principal da rota: página home</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        <li><Link to="/sobre" state={"This is a state from home"}>Clique aqui para ir para a página Sobre</Link></li>
        <li><Link to="/salas">Clique aqui para ir para a página Salas</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
      </ul>
    </>
  )
}

export default App
