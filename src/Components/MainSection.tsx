import React from "react"
import CharacterCreator from "./CharacterCreator"
import BlurbBox from "./BlurbBox"
import Party from "./Party"
import "../Styles/MainSection.css"

type Props = {
    monsters: {name: string}[]
}

const MainSection = (props: Props) => {
    return (
        <div className="main-section">
            <CharacterCreator />
            <BlurbBox />
            <Party />
        </div>
    )
}

export default MainSection

// Child Components: CharacterCreator, BlurbBox, Party