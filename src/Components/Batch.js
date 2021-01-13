import React from 'react'
import '../styles/batch.css'
import Paragraph from './Paragraph'
import AddBoxIcon from '@material-ui/icons/AddBox';
import BatchCard from './BatchCard';
function Batches() {
    return (
        <>
            <div className="batches">
                <div className="batches__header">
                    <div className="batches__header__title">
                        <Paragraph
                            text="All Batches"
                            style="batches__header__title__text"
                        />
                    </div>
                    <div className="batches__header__createbatch">
                        <Paragraph
                            text="Create Batch"
                            style="batches__header__createbatch__text"
                        />
                        <AddBoxIcon />
                    </div>
                </div>
            </div>
            <BatchCard
                subject="Maths"
                batch="Morning Batch"
                days="Mon, Tue, Wed"
                grade="Grade: 6th"
            />
            <BatchCard
                subject="Physics"
                batch="Evening Batch"
                days="Mon, Tue, Wed, Sat"
                grade="Grade: 7th"
            />
            <BatchCard
                subject="Computer"
                batch="Math's Batch"
                days="Mon, Tue"
                grade="Grade: 4th"
            />
            <div className="view-all-wrapper">
                <div className="view-all">
                    <Paragraph
                        text="View all"
                        style="batches__view-all"
                    />
                </div>
            </div>
        </>
    )
}

export default Batches
