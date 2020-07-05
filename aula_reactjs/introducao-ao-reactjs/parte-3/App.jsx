import React from 'react';
import mock from './mock';
import Button from './'

const buttonA = <button>Historico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>


const hasCustomer = true
//const hasCustomer = false


const App =() => {
    return (
        <div>
            <p>Bootcamp Fullstack Python</p>
            <p>Bem Vindo a Aula </p>
            <br/>
            {//hasCustomer && (
               hasCustomer ? (
                <div>
                    Clique no botao abaixo para visualizar o historico dos Clientes
                    <br/>
                    {buttonA}
                </div>
            ) : (
                <div>
                    Clique para cadastrar o cliente 
                     <br/>
                    {buttonB}
                </div>
               
         )}

        </div>
    )
};

/// outro exemplo.. faz o mesmo que o de cima 
const App =() => {

    const renderShowHistory = () => {
        <div>
            Clique no botao abaixo para visualizar o historico dos Clientes
            <br/>
            {buttonA}
        </div>
    }

    const renderAddCustomer = () => {
        <div>
            Clique para cadastrar o cliente 
            <br/>
            {buttonB}
        </div>
    }

    const showCustomer =() =>{
        if(!hasCustomer) return null
        //SE RETORNAR NULL NAO VAI SER ENDERIZADO
        //MAS NAO É UMA BOA PRATICA TER VARIOS RETURNS 
        return(
           <div>
               <h3>Nome do cliente: Mariana</h3>
           </div> 
        )
    }

    return (
        <div>
            <p>Bootcamp Fullstack Python</p>
            <p>Bem Vindo a Aula </p>
            <br/>
            { hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer()}
            </div>
        </div>
    )
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
///EXEMPLOS AULA -  LISTAS E CHAVES

const customer = [
    {
        id: 1,
        name: "Mariana",
        parents: ['Mara', 'Mauro']
    },
    {
        id: 2,
        name: "Julia",
        parents: ['Mara', 'Mauro']
    },
    {
        id: 3,
        name: "Mara",
        parents: ['Maria', 'Joao']
    }
]


const App =() => {

    //Chavez devem ser unicas apenas entre elementos irmaos
    const renderCustomers = (customer, index) => {
        return (
            //<li key={index}>{customer.name}</li> //usa o index qunado nao tiver um id
            <div  key={`customer-${customer.id}`}>    
                <li>{customer.name} <Button onClick={() => handlerClick(id)}>Deletar cliente</Button></li>
                {customer.parents.map(renderParents)}
            </div>
        )
    }

    const renderParents = (parents, index) => {
        return (
            <div style={ {paddingLeft: "30px"}}  key={`parents-${index}`}>
                <li> {parents}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Bootcamp Fullstack Python</p>
            <p>Bem Vindo a Aula </p>
            <br/>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Aula Manipulando Eventos




const customer = [
    {
        id: 1,
        name: "Mariana",
        parents: ['Mara', 'Mauro']
    },
    {
        id: 2,
        name: "Julia",
        parents: ['Mara', 'Mauro']
    },
    {
        id: 3,
        name: "Mara",
        parents: ['Maria', 'Joao']
    }
]


const App =() => {

    const handlerClick = (e, id) => {
        console.log("deletar cliente")
        alert(`id do cliente: ${id}`)
    }
    

    const renderCustomers = (customer, index) => {
        return (
            <div  key={`customer-${customer.id}`}>    
                <li>{customer.name} <button onClick={ (e) => handlerClick(e, id)}>Deletar Cliente</button></li>
                {customer.parents.map(renderParents)}
            </div>
        )
    }

    const renderParents = (parents, index) => {
        return (
            <div style={ {paddingLeft: "30px"}}  key={`parents-${index}`}>
                <li> {parents}</li>
            </div>
        )
    }
    const name = 'Digital Innovation One'

    const handlerChange = (e) => {
        const {value} = e.tagert
        console.log(value)
    }

    const showEvent = (e) => {
        console.log("evento clicado")
        console.log(e)
        alert(name)      
    }
    
    const Button = <button onClick={showEvent}>Mostrar Eventot</button> 
    const deleteButton = <button onClick={showEvent}>Mostrar Eventot</button> 

    return (
        <div>
            <p>Bootcamp Fullstack Python</p>
            <p>Bem Vindo a Aula </p>
            <input onChange={handlerChange} />
            {Button}
        </div>
        //{deleteButton}
    )
};



export default App;