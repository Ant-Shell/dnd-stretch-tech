import React, {FC, useState, ChangeEvent, useEffect} from "react"
import "../Styles/CharacterCreator.css"
import { names, races, classes }from "../randomizerData"
import { CharacterStructure } from "../types"

type Props = {
    submitForm: (event: React.FormEvent<HTMLFormElement>, character: CharacterStructure) => void
    setClass: (newState: string) => void
}

const CharacterCreator: FC<Props> = (props: Props) => {

    const [formData, setFormData] = useState<CharacterStructure>({name: '', race: '', classs: '', hp: 0, ac: 0, str: 0, con: 0, dex: 0, wis: 0, int: 0, cha: 0, about: ''})
    const [classsValue, setClasssValue] = useState<string | undefined>(undefined)
    const [raceValue, setRaceValue] = useState<string | undefined>(undefined)
    const [randomizing, setRandomizing] = useState<boolean>(false)

    const clearInputs = (event: any) => {
        event.preventDefault()
        setFormData({name: '', race: '', classs: '', hp: 0, ac: 0, str: 0, con: 0, dex: 0, wis: 0, int: 0, cha: 0, about: ''})
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setFormData({ ...formData, [event.target.id]: event.target.value })
    }

    const randoNumbers = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const randoData = (data: string[]) => {
        return data[Math.floor(Math.random() * (data.length))]
    }

    const randomize = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setRandomizing(true)
    setFormData({name: randoData(names),race: randoData(races), classs: randoData(classes), hp: randoNumbers(1, 100), ac: randoNumbers(1, 20), str: randoNumbers(1, 20), con: randoNumbers(1, 20), dex: randoNumbers(1, 20), wis: randoNumbers(1, 20), int: randoNumbers(1, 20), cha: randoNumbers(1, 20), about: ''})
    }

    const classValueHandler = (event: any) => {
        props.setClass(event.target.value)
        handleChange(event)
    }
    
    useEffect(() => {
        if (randomizing) {
            props.setClass(formData.classs)
            setClasssValue(formData.classs)
            setRaceValue(formData.race)
        } else {
            setClasssValue(undefined)
            setRaceValue(undefined)
        }
    }, [randomizing, props, formData.classs, formData.race])
    
    return (
        <div className="character-creator">
            <h3>Character Creator</h3>
            <form onSubmit={event => props.submitForm(event, formData)}>
            Name: <input type="text" id="name" onChange={event => handleChange(event)} value={formData.name}/>
            Race: <select id="race" value={raceValue} onChange={(event: any) => handleChange(event)} onClick={() => setRandomizing(false)}>
                        <option>Choose your race...</option>
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
            Class: <select id="classs" value={classsValue} onChange={(event: any) => classValueHandler(event)} onClick={() => setRandomizing(false)}>
                        <option>Choose your class...</option>
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
                <div>HP: <input type="text" id="hp" onChange={event => handleChange(event)} value={formData.hp}/></div>
                <div>AC: <input type="text" id="ac" onChange={event => handleChange(event)} value={formData.ac}/></div>
                <div className="ability-score-wrapper">
                    <div>STR <input className="ability-score" type="text" id="str" onChange={event => handleChange(event)} value={formData.str}/></div>
                    <div>CON <input className="ability-score" type="text" id="con" onChange={event => handleChange(event)} value={formData.con}/></div>
                    <div>DEX <input className="ability-score" type="text" id="dex" onChange={event => handleChange(event)} value={formData.dex} /></div>
                    <div>WIS <input className="ability-score" type="text" id="wis" onChange={event => handleChange(event)} value={formData.wis} /></div>
                    <div>INT <input className="ability-score" type="text" id="int" onChange={event => handleChange(event)} value={formData.int}/></div>
                    <div>CHA <input className="ability-score" type="text" id="cha" onChange={event => handleChange(event)} value={formData.cha}/></div>
                </div>
                    About Me: 
                    <div><textarea className="about-me" id="about" onChange={(event: any) => handleChange(event)}/></div>
                    <button id="submit" type="submit">SUBMIT</button>
                    <button onClick={(event: any) => clearInputs(event)}>Clear</button>
            </form>
            <button id="randoButton" onClick={(event) => randomize(event)}>Random</button>
        </div>
    )
}

export default CharacterCreator

