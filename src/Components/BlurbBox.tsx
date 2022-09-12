import React from "react"
import { blurbs } from "../ClassBlurbs"
import "../Styles/BlurbBox.css"

type Props = {
    monsters: {name: string}[]
}

const BlurbBox = (props: Props) => {

    // Conditonal: If class state === x
    // render appropriate blurb

    console.log(props.monsters)

    let monsterList = props.monsters.map(monster => {
        return <p>{monster.name}</p>
    })

    return (
        <div className="blurb-box">
            Here is where some blurbs will go.<br></br>
            {monsterList}
        </div>
    )
}

export default BlurbBox

// Should build an array of blurbs about each class and populate them when
// that class is selected.
// Get with Nick about blurbs.

