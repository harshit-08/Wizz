import React from 'react'

function Button({ text, style, onClick }) {
    return (
        <button className={style} type="submit" onClick={onClick}>{text}</button>
    )
}

export default Button
