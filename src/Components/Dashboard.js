
import React from 'react'
import '../styles/dashboard.css'
import Batch from './Batch'
import Class from './Class'
import Navbar from './Navbar'
import Paragraph from './Paragraph'
import Assignment from './Assignment'
import Button from './Button'


function Dashboard({ logout }) {



    return (
        <div className="dashboard">

            <Navbar />
            <Paragraph text="Are you ready to create Batch & Assignments ?" style="dashboard__p1" />
            <Class />
            <Batch />
            <Assignment />
            {/* <button type="submit" onClick={logout}>logout</button> */}
            <div className="dashboard__logout__wrapper">
                <Button text="Log Out" style="dashboard__logout" onClick={logout} />
            </div>

        </div>
    )
}

export default Dashboard
