import React from 'react'

function Button(props) {

    const { name, onClick } = props
    // const name =  props.name //igual o de cima 
    return (
        <button onClick={onClick}>{name}</button>
    )

}

export default Button