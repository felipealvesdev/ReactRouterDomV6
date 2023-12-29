import { Link, useLocation } from "react-router-dom";


export default function Sobre() {

  const { state } = useLocation();

  return (
    <div>
        <h1>Rota sobre: Página sobre</h1>
        <Link to="/">Voltar para a home</Link>
        <p>{state} oi</p>
    
    </div>
  )
}
