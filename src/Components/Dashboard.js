import React from 'react'
import '../styles/dashboard.css'
import Batches from './Batches'
import Classes from './Classes'
import Navbar from './Navbar'
import Paragraph from './Paragraph'


function Dashboard({ logout }) {



    return (
        <div className="dashboard">

            <Navbar />
            {/* <button type="submit" onClick={logout}>logout</button> */}
            <Paragraph text="Are you ready to create Batch & Assignments ?" style="dashboard__p1" />
            <Classes />
            <Batches />
        </div>
    )
}

export default Dashboard
