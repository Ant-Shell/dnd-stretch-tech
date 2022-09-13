import React from "react"
import "../Styles/Nav.css"

type Props = {
    monsterViewHandler: () => void
}

const Nav = (props: Props) => {



    return (
            <nav>
                Dungeons & Documents
                <button className="view-monster-page-button" onClick={() => props.monsterViewHandler()}>View Monster Manual</button>
            </nav>     
    )
}

export default Nav

// Button to toggle view between Monster Manual and Character Creator