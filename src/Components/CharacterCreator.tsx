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

type Props = {
    submitForm: (event: React.FormEvent<HTMLFormElement>, character: object) => void
}

const CharacterCreator: FC<Props> = (props: Props) => {

    const [formData, setFormData] = useState<object>({name: '', race: '', classs: '', hp: 0, ac: 0, str: 0, con: 0, dex: 0, wis: 0, int: 0, cha: 0, about: ''})

    // This can stay here ^^

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
    }

    // const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     console.log(formData)
    // }

    // Need to move these methods to App.tsx ^^

    return (
        <div className="character-creator">
            <h3>This is the Character Creator.</h3>
            <form onSubmit={event => props.submitForm(event, formData)}>
            Name: <input type="text" id="name" onChange={event => handleChange(event)} />
            Race: <input type="select" id="race" onChange={event => handleChange(event)}/>
            Class: <input type="select" id="classs" onChange={event => handleChange(event)}/>
            HP: <input type="text" id="hp" onChange={event => handleChange(event)}/>
            AC: <input type="text" id="ac" onChange={event => handleChange(event)}/>
            <div className="ability-score-wrapper">
                <div>STR <input className="ability-score" type="text" id="str" onChange={event => handleChange(event)}/></div>
                <div>CON <input className="ability-score" type="text" id="con" onChange={event => handleChange(event)}/></div>
                <div>DEX <input className="ability-score" type="text" id="dex" onChange={event => handleChange(event)}/></div>
                <div>WIS <input className="ability-score" type="text" id="wis" onChange={event => handleChange(event)}/></div>
                <div>INT <input className="ability-score" type="text" id="int" onChange={event => handleChange(event)}/></div>
                <div>CHA <input className="ability-score" type="text" id="cha" onChange={event => handleChange(event)}/></div>
                <div>About Me <input className="ability-score" type="text" id="about" onChange={event => handleChange(event)}/></div>
            </div>
            <button type="submit">SUBMIT</button>
            </form>
            <button onClick={() => console.log("click")}>Randomize</button>
        </div>
    )
}

export default CharacterCreator

// Need inputs for Name, Race, Class, HP, AC, 6 Stats, About me 

// Need three buttons.
// one for randomizing input values (besides about me?)
// one for adding a character to the party block
// one to clear all inputs.