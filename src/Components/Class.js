import React from 'react'
import Paragraph from './Paragraph'
import '../styles/class.css'

function Classes() {
    return (
        <div className="classes__wrapper">
            <div className="classes">
                <Paragraph
                    text="Upcoming Classes"
                    style="classes__heading"
                />
                <div className="classes__card">
                    <Paragraph
                        text="It looks like you don't have any upcoming classes for today!"
                        style="classes__p1"
                    />
                </div>
            </div>
        </div>
    )
}

export default Classes
