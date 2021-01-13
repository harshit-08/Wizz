import React from 'react'
import Paragraph from './Paragraph'
import '../styles/class.css'

function Class() {
    return (
        <div className="class__wrapper">
            <div className="class">
                <Paragraph
                    text="Upcoming class"
                    style="class__heading"
                />
                <div className="class__card">
                    <Paragraph
                        text="It looks like you don't have any upcoming classes for today!"
                        style="class__p1"
                    />
                </div>
            </div>
        </div>
    )
}

export default Class
