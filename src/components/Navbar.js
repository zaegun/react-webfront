import abnbLogo from "../images/logo.png"
import React from "react"

export default function NavBar() {
    return (
        <nav>
            <img class="nav-logo" src={abnbLogo} />
        </nav>
    )
}