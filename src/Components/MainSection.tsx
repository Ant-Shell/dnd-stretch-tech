import React, { useState } from "react"
import CharacterCreator from "./CharacterCreator"
import BlurbBox from "./BlurbBox"
import Party from "./Party"
import "../Styles/MainSection.css"
import { PartyStructure } from "../types"



const MainSection = () => {

    const [party, setParty] = useState<PartyStructure>([{
            name: 'Krusk', 
            race: 'Orc', 
            classs: 'Barbarian', 
            hp: 80, 
            ac: 15, 
            str: 18, 
            con: 16, 
            dex: 13, 
            wis: 12, 
            int: 10, 
            cha: 8, 
            about: ''
            }])

    const submitForm = (event: React.FormEvent<HTMLFormElement>, character: any) => {
        event.preventDefault()
        setParty([...party, character])
    }

    // Clear and delete member buttons

    return (
        <div className="main-section">
            <CharacterCreator submitForm={submitForm}/>
            <BlurbBox />
            <Party party={party} />
        </div>
    )
}

export default MainSection

// Child Components: CharacterCreator, BlurbBox, Party

// Need to pass CharacterCreator (and Party) component parameters down as props from App