import React, {FC, useState, ChangeEvent} from "react"
import "../Styles/CharacterCreator.css"
import { FormInputs} from "../types"

// type FormInputs = {
//     name: string
//     race: string
//     classs: string
//     hp: number
//     ac: number
//     str: number
//     con: number
//     dex: number
//     wis: number
//     int: number
//     cha: number
//     about: string
// }

const CharacterCreator: FC<FormInputs> = ({name, race, classs, hp, ac, str, con, dex, wis, int, cha, about}) => {

    const [formData, setFormData] = useState<string>("")

    // This can stay here ^^

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value)
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    // Need to move these methods to App.tsx ^^

    return (
        <div className="character-creator">
            <h3>This is the Character Creator.</h3>
            <form onSubmit={submitForm}>
            Name: <input type="text" id="name" value={name} onChange={handleChange} />
            Race: <input type="select" id="race" value={race} onChange={handleChange}/>
            Class: <input type="select" id="classs" value={classs} onChange={handleChange}/>
            HP: <input type="text" id="hp" value={hp} onChange={handleChange}/>
            AC: <input type="text" id="ac" value={ac} onChange={handleChange}/>
            <button>Randomize</button>
            <div className="ability-score-wrapper">
                <div>STR <input className="ability-score" type="text" id="str" value={str} onChange={handleChange}/></div>
                <div>CON <input className="ability-score" type="text" id="con" value={con} onChange={handleChange}/></div>
                <div>DEX <input className="ability-score" type="text" id="dex" value={dex} onChange={handleChange}/></div>
                <div>WIS <input className="ability-score" type="text" id="wis" value={wis} onChange={handleChange}/></div>
                <div>INT <input className="ability-score" type="text" id="int" value={int} onChange={handleChange}/></div>
                <div>CHA <input className="ability-score" type="text" id="cha" value={cha} onChange={handleChange}/></div>
                <div>About Me <input className="ability-score" type="text" id="about" value={about} onChange={handleChange}/></div>
            </div>
            <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default CharacterCreator

// Need inputs for Name, Race, Class, HP, AC, 6 Stats, About me 

// Need three buttons.
// one for randomizing input values (besides about me?)
// one for adding a character to the party block
// one to clear all inputs.