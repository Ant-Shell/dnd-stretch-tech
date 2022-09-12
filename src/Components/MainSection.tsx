import React from "react"
import CharacterCreator from "./CharacterCreator"
import BlurbBox from "./BlurbBox"
import Party from "./Party"

const MainSection = () => {
    return (
        <div className="main-section">
            This is the main section.
            <CharacterCreator />
            <BlurbBox />
            <Party />
        </div>
    )
}

export default MainSection

// Child Components: CharacterCreator, BlurbBox, Party