import React from "react"
import { blurbs } from "../ClassBlurbs"

const BlurbBox = () => {

    // Conditonal: If class state === x
    // render appropriate blurb

    return (
        <div className="blurb-box">
            Here is where some blurbs will go.<br></br>
            {blurbs[0][1]}
        </div>
    )
}

export default BlurbBox

// Should build an array of blurbs about each class and populate them when
// that class is selected.
// Get with Nick about blurbs.

