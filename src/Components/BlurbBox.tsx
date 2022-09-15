import {FC} from "react"
import { blurbs } from "../ClassBlurbs"
import "../Styles/BlurbBox.css"

type Props = {
    currentClass: string
}

const BlurbBox:FC<Props> = ({ currentClass }) => {

   const theBlurb = blurbs.reduce((acc, blurb) => {
        if (blurb[0] === currentClass) {
            acc.push(blurb[1])
        }
        return acc
   }, [] as Array<string>)

    return (
        <div className="blurb-box">
            {(currentClass) && <h1>The {currentClass}</h1>}
            <article className="the-blurb">{theBlurb}</article>
        </div>
    )
}

export default BlurbBox

