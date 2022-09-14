import {FC} from "react"
import { blurbs } from "../ClassBlurbs"
import "../Styles/BlurbBox.css"

type Props = {
    currentClass: string
}

const BlurbBox:FC<Props> = ({ currentClass }) => {

   const theBlurb = blurbs.reduce((acc: any, blurb) => {
        if (blurb[0] === currentClass) {
            acc.push(blurb[1])
        }
        return acc
   }, [])

    return (
        <div className="blurb-box">
            {(currentClass) && <h1>The {currentClass}</h1>}
            <article className="the-blurb">{theBlurb}</article>
        </div>
    )
}

export default BlurbBox

// Should build an array of blurbs about each class and populate them when
// that class is selected.
// Get with Nick about blurbs.

