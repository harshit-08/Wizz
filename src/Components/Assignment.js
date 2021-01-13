import React from 'react'
import '../styles/assignment.css'
import AssignmentCard from './AssignmentCard'
import Paragraph from './Paragraph'
function Assignments() {
    return (
        <>
            <div className="assignment">
                <div className="assignment__header__wrapper">
                    <div className="assignment__header">
                        <Paragraph
                            text="Assignments"
                            style="batches__header__title__text1"
                        />
                        <Paragraph
                            text="Recently Submitted"
                            style="batches__header__title__text2"
                        />
                    </div>
                </div>
            </div>
            <AssignmentCard
                assignmentNo="Assignent 1"
                subject="Maths"
                submitted="15 /20"
                desc="Rational Numbers assignent, Very important for your next exam ..."
                dueDate="18 Sep"
                dueTime="2:00 PM" />
            <AssignmentCard
                assignmentNo="Assignment 2"
                subject="Science"
                submitted="15 /20"
                desc="Crop Production and Mgt. Very important for your next exam ..."
                dueDate="18 Sep"
                dueTime="2:00 PM" />


            <div className="view-all-wrapper">
                <div className="view-all">
                    <Paragraph
                        text="View all"
                        style="assignent__view-all"
                    />
                </div>
            </div>
        </>
    )
}

export default Assignments
