import React from "react"
import CharacterCreator from "./CharacterCreator"
import BlurbBox from "./BlurbBox"
import Party from "./Party"
import "../Styles/MainSection.css"
// import {FormInputs} from "../types"

type Props = {
    monsters: {name: string}[]
}

const MainSection = (props: Props) => {
    return (
        <div className="main-section">
            <CharacterCreator name="" race="" classs="" hp={0} ac={0} str={0} con={0} dex={0} wis={0} int={0} cha={0} about=""/>
            <BlurbBox monsters={props.monsters}/>
            <Party />
        </div>
    )
}

export default MainSection

// Child Components: CharacterCreator, BlurbBox, Party

// Need to pass CharacterCreator (and Party) component parameters down as props from App