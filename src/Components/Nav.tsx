import React from "react"
import "../Styles/Nav.css"
import { Link } from "react-router-dom"

type Props = {
    monsterViewHandler: () => void
}

const Nav = (props: Props) => {

    let url = window.location.href.slice(-8)
    let buttonName = 'View Monster Manual'
    
    if (url === 'monsters') {
        url = ''
        buttonName = 'View Character Creator'
    } else {
        url = 'monsters'
    }

    return (
            <nav>
                Dungeons & Documents
                <Link to={`/${url}`}><button className="view-monster-page-button" onClick={() => props.monsterViewHandler()}>{buttonName}</button></Link>
            </nav>     
    )
}

export default Nav
