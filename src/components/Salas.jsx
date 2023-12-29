import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";


export default function Salas() {

  const params = useParams();
  const { id } = params;// Esse aqui pega o valor que vem de :id ou o id logo apos a primeira barra

  const[ qs, setQs] = useSearchParams();// esse aqui funciona como o useState
  // voce usa o setQs para setar o estado da mesma forma


  return (
    <div>
        <h1>Rota sobre: Salas reservadas e livres</h1>
        <p>{id? `Sala ${id}` : "Sala sem numero"}</p>

        <p> QS {`${qs.get('page')}`}</p>

        <Outlet />{/**Oulet permite pegar os itens que estiverem dentro do atributo element de uma 
         * rota aninhada, ou seja, se tiver route dentro de outro route.
         */}

        <Link to="/">Voltar para a home</Link>    
    </div>
  )
}
