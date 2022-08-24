import React from 'react'
import { ReactPropTypes } from 'react'

function Button({ color, text, onClick }) {
    return <button
        onClick={onClick}
        className='btn'
        style={{ backgroundColor: color }}
    >
        {text}
    </button>
}

Button.defaultProps = {
    color: "red"
}


export default Button