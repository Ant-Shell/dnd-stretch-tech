import React, { useState } from "react"
import MonstersList from "./MonstersList"
import MonsterDetails from "./MonsterDetails"
import "../Styles/MonsterSection.css"

type Props = {
    monsters: {name: string, url: string}[]
}

type MonsterStructure = {
    name: string
    url: string
    challenge_rating: number                //  <--- update here
    size: string
    type: string
    alignment: string
    languages: string
    armor_class: number
    hit_points: number
    xp: number
    proficiencies: {
        value: number 
        proficiency: {
            index: string
            name: string
        }
    }[]
    special_abilities: {
        name: string
        desc: string
    }[]
}

const MonsterSection = (props: Props) => {

    const [currentMonster, setCurrentMonster] = useState<MonsterStructure>({
        name: 'Aboleth', 
        url: '/api/monsters/aboleth',
        challenge_rating: 15,               // <--- here
        size: "Medium", 
        type: "Goblinoid",
        alignment: "Chaotic Evil",
        languages: "Goblinoid",
        armor_class: 15,
        hit_points: 60,
        xp: 2,
        proficiencies: [{
            value: 1,
            proficiency: {
                index: "saving-throw-dex",
                name: "Saving Throw: DEX"
            }
        }],
        special_abilities: [{name: "Amphibious" , desc: "The aboleth can breathe air and water."}]
    })

    const monsterHandler = (event: any) => {
        const theMonster = props.monsters.find(monster => monster.name === event.target.id)
        fetch(`https://www.dnd5eapi.co${theMonster?.url}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCurrentMonster(data)
        })
    }

    return (
        <div className="monster-section">
            <MonstersList monsters={props.monsters} monsterHandler={monsterHandler}/>
            <MonsterDetails currentMonster={currentMonster}/>
        </div>
    )
}

export default MonsterSection