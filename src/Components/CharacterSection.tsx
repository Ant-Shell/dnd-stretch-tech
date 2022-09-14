import React, { FC, useState } from "react"
import CharacterCreator from "./CharacterCreator"
import BlurbBox from "./BlurbBox"
import Party from "./Party"
import "../Styles/MainSection.css"
import { PartyStructure } from "../types"



const CharacterSection:FC = () => {


    const [currentClass, setClass] = useState<string>('')
    const [party, setParty] = useState<PartyStructure>([])

    const submitForm = (event: React.FormEvent<HTMLFormElement>, character: any) => {
        event.preventDefault()
        setParty([...party, character])
    }

    const deleteMember = (memberToDelete: string): void => {
        setParty(party.filter((member) => {
            return member.name != memberToDelete
        }))

    }
    
    return (
        <div className="main-section">
            <CharacterCreator submitForm={submitForm} setClass={setClass} />
            <BlurbBox currentClass={currentClass}/>
            <Party party={party} deleteMember={deleteMember} />
        </div>
    )
}

export default CharacterSection