import React from 'react'

function Paragraph({ text, style }) {
    return (
        <p className={style}>{text}</p>
    )
}

export default Paragraph
