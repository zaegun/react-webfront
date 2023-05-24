import React from 'react'
import '../stylesheets/TopContent.css'

export default function TopContent() {
    return (
        <header>
            <img className="header-image" src="images/header_image.png" alt="" />
            <div className="header-title">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </header>
    )
}