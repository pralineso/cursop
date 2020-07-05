import React, { Component } from "react"
import ReactDOM from "react-dom"
import Button from './button' //componente
import "./styles.css"

//parte exemplo jsx
function sum(a, b){
    return a + b
}

function primeiroJSX(){
    return (
        <div className='teste'>
            Mariana
            <h5>Soma: {sum(10, 20)}</h5>
            <Button  onClick= { () => sum(10, 20)} name="clique"/> 
        </div>
    )
}
//fim exemplo 
 
//exemplo lifecycle
class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })

       // this.state.copo = 'refrigerante' //ISSO AKI É UAM MA PRATICA
    }

    render(){
        const { clock } = this.state
        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

const App = () => {

    return (//aki dentro ta renderizando 
        <div className="App">
            Hello World
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)