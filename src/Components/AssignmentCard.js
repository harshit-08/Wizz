import React from 'react'
import '../styles/assignment-card.css'
import Paragraph from './Paragraph'
function AssignmentCard({ assignmentNo, subject, submitted, desc, dueDate, dueTime }) {
    const date = 'Due Date: ' + dueDate + ' | ' + dueTime
    return (
        <div className="assignment-card__wrapper">
            <div className="assignment-card">
                <div className="assignment-card__header">
                    <Paragraph text={assignmentNo} style="assignment-card__header__no" />
                    <div className="assignment-card__header__submitted">
                        <Paragraph text="Submitted:" style="assignment-card__header_submit" />
                        <Paragraph text={submitted} style="assignment-card__header_submit__detail" />
                    </div>
                </div>
                <Paragraph text={subject} style="assignment-card__subject" />
                <Paragraph text={desc} style="assignment-card_desc" />
                <div className="assignment-card__read-more">
                    <Paragraph text="Read More" style="assignment-card__read-more-text" />
                </div>
                <Paragraph text={date} style="assignment-card__due-date" />
            </div>
        </div>
    )
}

export default AssignmentCard
