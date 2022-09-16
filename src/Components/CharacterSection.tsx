import React, { FC, useState } from "react"
import CharacterCreator from "./CharacterCreator"
import BlurbBox from "./BlurbBox"
import Party from "./Party"
import "../Styles/MainSection.css"
import { PartyStructure, CharacterStructure } from "../types"

type Props = {
    party: PartyStructure
    submitForm: (event: React.FormEvent<HTMLFormElement>, character: CharacterStructure) => void
    deleteMember(memberToDelete: string): void
    killemAll: () => void
}

const CharacterSection:FC<Props> = ({ party, submitForm, deleteMember, killemAll }) => {

    const [currentClass, setClass] = useState<string>('')
    const [character, setCharacter] = useState<CharacterStructure | undefined>(undefined)

    return (
        <div className="main-section">
            <CharacterCreator submitForm={submitForm} setClass={setClass} setCharacter={setCharacter}/>
            <BlurbBox currentClass={currentClass} character={character}/>
            <Party party={party} deleteMember={deleteMember} killemAll={killemAll} setCharacter={setCharacter}/>
        </div>
    )
}

export default CharacterSection