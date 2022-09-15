import { useState, FC } from "react"
import "../Styles/Nav.css"
import { Link } from "react-router-dom"

const Nav:FC = () => {

    const [url, setUrl] = useState<string>('monsters')

    let buttonName = 'View Character Creator'


    if (url === 'monsters') {
        buttonName = 'View Monster Manual'
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
                Dungeons & Documents
                <Link to={`/${url}`}><button className="view-monster-page-button" onClick={() => pageHandler()}>{buttonName}</button></Link>
            </nav>     
    )
}

export default Nav
