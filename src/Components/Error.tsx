import {FC} from "react"
import { Link } from "react-router-dom"
import '../Styles/Error.css'
//create css file

const Error:FC = () => {
    return (
        <section className="error-section">
            <h1>Oh no! You seem to have taken a wrong turn along your quest. Please return home!</h1>
            <Link to={`/`}><button className="return-home-button">🕯  Portal to your Fortress  🕯</button></Link>
        </section>
    )
}

export default Error