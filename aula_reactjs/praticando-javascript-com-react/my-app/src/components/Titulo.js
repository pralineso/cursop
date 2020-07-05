import React from 'react';
import PropTypes from 'prop-types';

import "./Titulo.css";


function Titulo({children, cor}){
    return (
        <h1 className={cor}>{children}  {cor}</h1>
    )
}

//validando os valores passados
Titulo.propTypes = {
    children: PropTypes.node.isRequired, //es enode é de nó
    cor: PropTypes.oneOf(["vermelho", "azul", "verde"]).isRequired

}

//defidindo uma cor padrao
Titulo.defaultProps = {
    cor: "vermelho"
}


export default Titulo;