import React, {FC, useState, ChangeEvent, useEffect} from "react"
import "../Styles/CharacterCreator.css"
import { names, adjectives, races, classes, backstories }from "../randomizerData"
import { CharacterStructure } from "../types"

type Props = {
    submitForm: (event: React.FormEvent<HTMLFormElement>, character: CharacterStructure) => void | string
    setClass: (newState: string) => void
    setCharacter: (param: CharacterStructure | undefined) => void
    hasError: boolean
}

const CharacterCreator: FC<Props> = (props: Props) => {


    const [formData, setFormData] = useState<CharacterStructure>({name: '', race: '', classs: '', hp: '', ac: '', str: '', con: '', dex: '', wis: '', int: '', cha: '', about: ''})
    const [classsValue, setClasssValue] = useState<string | undefined>(undefined)
    const [raceValue, setRaceValue] = useState<string | undefined>(undefined)
    const [randomizing, setRandomizing] = useState<boolean>(false)

    const clearInputs = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setRaceValue('')
        setClasssValue('')
        setFormData({name: '', race: '', classs: '', hp: '', ac: '', str: '', con: '', dex: '', wis: '', int: '', cha: '', about: ''})
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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
    props.setCharacter(undefined)
    setRandomizing(true)
    setFormData({name: randoData(names) + ' the ' + randoData(adjectives), race: randoData(races), classs: randoData(classes), hp: randoNumbers(20, 100).toString(), ac: randoNumbers(10, 20).toString(), str: randoNumbers(8, 20).toString(), con: randoNumbers(8, 20).toString(), dex: randoNumbers(8, 20).toString(), wis: randoNumbers(8, 20).toString(), int: randoNumbers(8, 20).toString(), cha: randoNumbers(8, 20).toString(), about: randoData(backstories)})
    }

    const classValueHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setClass(event.target.value)
        handleChange((event as unknown) as React.ChangeEvent<HTMLInputElement>)
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

    const nameTakenMessage = props.hasError === true && <span className="name-error-message">Duplicate name, try again.</span>;
    
    return (
        <div className="character-creator">
            <h3>Character Creator</h3>
            <form onSubmit={event => props.submitForm(event, formData)}>
            { nameTakenMessage }
            <label>Name:</label> <input type="text" id="name" onChange={event => handleChange(event)} value={formData.name} required/>
            <label>Race:</label> <select required id="race" value={raceValue} onChange={(event) => handleChange(event)} onClick={() => setRandomizing(false)} >
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
            <label>Class:</label> <select required id="classs" value={classsValue} onChange={(event) => classValueHandler(event)} onClick={() => setRandomizing(false)} >
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
                <div><label>HP:</label> <input type="text" id="hp" onChange={event => handleChange(event)} value={formData.hp} required/></div>
                <div><label>AC:</label> <input type="text" id="ac" onChange={event => handleChange(event)} value={formData.ac} required/></div>
                <div className="ability-score-wrapper">
                    <div><label>STR:</label> <input className="ability-score" type="text" id="str" onChange={event => handleChange(event)} value={formData.str} required/></div>
                    <div><label>CON:</label> <input className="ability-score" type="text" id="con" onChange={event => handleChange(event)} value={formData.con} required/></div>
                    <div><label>DEX:</label> <input className="ability-score" type="text" id="dex" onChange={event => handleChange(event)} value={formData.dex} required/></div>
                    <div><label>WIS:</label> <input className="ability-score" type="text" id="wis" onChange={event => handleChange(event)} value={formData.wis} required/></div>
                    <div><label>INT:</label> <input className="ability-score" type="text" id="int" onChange={event => handleChange(event)} value={formData.int} required/></div>
                    <div><label>CHA:</label> <input className="ability-score" type="text" id="cha" onChange={event => handleChange(event)} value={formData.cha} required/></div>
                </div>
                    About Me: 
                    <div><textarea className="about-me" id="about" onChange={(event) => handleChange(event)} value={formData.about}/></div>
                    <button id="submit" type="submit">SUBMIT</button>
                    <button id="clear" onClick={(event) => clearInputs(event)}>Clear</button>
            </form>
            <button id="randoButton" onClick={(event) => randomize(event)}>Random</button>
        </div>
    )
}

export default CharacterCreator

