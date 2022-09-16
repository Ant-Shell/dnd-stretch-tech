import { useState, FC } from "react"
import "../Styles/Nav.css"
import { Link } from "react-router-dom"

const Nav:FC = () => {

    const [url, setUrl] = useState<string>('monsters')

    let buttonName = 'Character Creator'

    if (url === 'monsters') {
        buttonName = 'Monster Manual'
    }

    const pageHandler = () => {
        if (url === 'monsters') {
            setUrl('')
        } else {
            setUrl('monsters')
        }
    }

    return (
            <nav>
                <header>Dungeons & Documents</header>
                <div className="button-container">
                    <Link to={`/${url}`}><button className="view-monster-page-button" onClick={() => pageHandler()}>{buttonName}</button></Link>
                </div>
            </nav>     
    )
}

export default Nav
