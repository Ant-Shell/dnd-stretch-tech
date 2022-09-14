import React, {FC, useState, ChangeEvent} from "react"
import "../Styles/CharacterCreator.css"
import { FormInputs} from "../types"

type Props = {
    submitForm: (event: React.FormEvent<HTMLFormElement>, character: object) => void
    setClass: (newState: string) => void
}

const CharacterCreator: FC<Props> = (props: Props) => {

    const [formData, setFormData] = useState<object>({name: '', race: '', classs: '', hp: 0, ac: 0, str: 0, con: 0, dex: 0, wis: 0, int: 0, cha: 0, about: ''})


   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
    }

// onChange={event => handleChange(event)
    return (
        <div className="character-creator">
            <h3>This is the Character Creator.</h3>
            <form onSubmit={event => props.submitForm(event, formData)}>
            Name: <input type="text" id="name" onChange={event => handleChange(event)} />
            Race: <select id="race">
                        <option defaultValue="" disabled selected>Choose your race...</option>
                        <option value="Dragonborn">Dragonborn</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Half-Elf">Half-Elf</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Half-Orc">Half-Orc</option>
                        <option value="Human">Human</option>
                        <option value="Tiefling">Tiefling</option>
                    </select>
            Class: <select id="classs" onChange={(event) => props.setClass(event.target.value)}>
                        <option defaultValue="" disabled selected>Choose your class...</option>
                        <option value="Barbarian">Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
            <div>HP: <input type="text" id="hp" onChange={event => handleChange(event)}/></div>
            <div>AC: <input type="text" id="ac" onChange={event => handleChange(event)}/></div>
            <div className="ability-score-wrapper">
                <div>STR <input className="ability-score" type="text" id="str" onChange={event => handleChange(event)}/></div>
                <div>CON <input className="ability-score" type="text" id="con" onChange={event => handleChange(event)}/></div>
                <div>DEX <input className="ability-score" type="text" id="dex" onChange={event => handleChange(event)}/></div>
                <div>WIS <input className="ability-score" type="text" id="wis" onChange={event => handleChange(event)}/></div>
                <div>INT <input className="ability-score" type="text" id="int" onChange={event => handleChange(event)}/></div>
                <div>CHA <input className="ability-score" type="text" id="cha" onChange={event => handleChange(event)}/></div>
            </div>
                About Me: 
                <div><textarea className="about-me" id="about" onChange={(event: any) => handleChange(event)}/></div>
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