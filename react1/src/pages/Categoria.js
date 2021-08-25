import React from 'react';
//import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

//===============>Complemento aula 24 de react(Routers parte 4) <====================
function useQuery(){
    return new URLSearchParams(useLocation().search)
}
function Categoria() {
    let query = useQuery();

    let cat = query.get('tipo');
    let subtipo = query.get('subtipo');

    return (
        <div>
            <h4>Pagina Categoria</h4>
            Exibindo itens da categoria: {cat} - {subtipo}
        </div>
    );
}

export default Categoria;
