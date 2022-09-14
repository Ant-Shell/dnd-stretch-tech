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
        challenge_rating: 10,               // <--- here
        size: "Large", 
        type: "aberration",
        alignment: "lawful evil",
        languages: "Deep Speech, telepathy 120 ft.",
        armor_class: 17,
        hit_points: 135,
        xp: 5900,
        proficiencies: [{
            value: 6,
            proficiency: {
                name: "Saving Throw: CON"
            }
        },
        {
            value: 8,
            proficiency: {
                name: "Saving Throw: INT"
            }
        }, 
        {
            value: 6,
            proficiency: {
                name: "Saving Throw: WIS"
            }
        },
        {
            value: 12,
            proficiency: {
                name: "Skill: History"
            }
        },
        {
            value: 10,
            proficiency: {
                name: "Skill: History"
            }
        }
    ],
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
    console.log(currentMonster)
    return (
        <div className="monster-section">
            <MonstersList monsters={props.monsters} monsterHandler={monsterHandler}/>
            <MonsterDetails currentMonster={currentMonster}/>
        </div>
    )
}

export default MonsterSection