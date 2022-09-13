import React from "react"
import MonstersList from "./MonstersList"
import MonsterDetails from "./MonsterDetails"
import "../Styles/MonsterSection.css"

type Props = {
    monsters: {name: string}[]
}

const MonsterSection = (props: Props) => {
    return (
        <div className="monster-section">
            <MonstersList monsters={props.monsters}/>
            <MonsterDetails />
        </div>
    )
}

export default MonsterSection