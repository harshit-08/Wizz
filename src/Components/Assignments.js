import React from 'react'

function Assignments() {
    return (
        <>
            <div className="assignments">
                <div className="assignments__header">
                    <Paragraph text="Assignments" style="assignments__header__title__text1" />
                    <Paragraph text="Recently Submitted" style="batches__header__title__text2" />
                </div>
            </div>
            <AssignmentCard subject="Maths" batch="Morning Batch" days="Mon, Tue, Wed" grade="Grade: 6th" />
            <div className="view-all-wrapper">
                <div className="view-all">
                    <Paragraph text="View all" style="batches__view-all" />
                </div>
            </div>
        </>
    )
}

export default Assignments
