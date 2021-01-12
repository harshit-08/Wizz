import React from 'react'
import Paragraph from './Paragraph'
import '../styles/batch-card.css'
import DateRangeIcon from '@material-ui/icons/DateRange';
function BatchCard({ batch, grade, days, subject }) {
    return (
        <div className="batch-card__wrapper">
            <div className="batch-card">
                {/* <div> */}
                <Paragraph text={subject} style="batch-card__subject" />
                {/* </div> */}
                <div className="batch-card__batch">
                    <Paragraph text={batch} style="batch-card__batch-name" />
                    <Paragraph text={grade} style="batch-card__grade" />
                </div>
                <div className="batch-card__days">
                    <DateRangeIcon />
                    <Paragraph text={days} style="batch-card__day" />
                </div>
            </div>
        </div>
    )
}

export default BatchCard
