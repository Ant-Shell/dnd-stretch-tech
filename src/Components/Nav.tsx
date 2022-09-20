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
            <header><img className="app-title" key="appTitle" src='https://user-images.githubusercontent.com/102932448/190942053-3537afa6-4478-4ae5-bf39-e9af6e7210ff.png' alt="Dungeons & Documents"/>
                    <Link to={`/dnd-stretch-tech/${url}`}><button id="changePage" className="view-monster-page-button" onClick={() => pageHandler()}>{buttonName}</button></Link>
            </header>
        </nav>
    )
}

export default Nav
