import { useState, FC } from "react"
import MonstersList from "./MonstersList"
import MonsterDetails from "./MonsterDetails"
import "../Styles/MonsterSection.css"
import { MonsterStructure } from "../types"

type Props = {
    monsters: {name: string, url: string}[]
}

const MonsterSection:FC<Props> = (props) => {

    const [monsterNotFound, setMonsterNotFound] = useState<boolean>(false)

    const [currentMonster, setCurrentMonster] = useState<MonsterStructure>({
        name: 'Aboleth', 
        url: '/api/monsters/aboleth',
        challenge_rating: 10,
        size: "Large", 
        type: "aberration",
        alignment: "lawful evil",
        languages: "Deep Speech, telepathy 120 ft.",
        armor_class: [{type: "natural", value: 17}],
        hit_points: 135,
        xp: 5900,
        proficiencies: [{value: 6, proficiency: {name: "Saving Throw: CON"}}, {value: 8, proficiency: {name: "Saving Throw: INT"}}, {value: 6,proficiency: { name: "Saving Throw: WIS"}}, {value: 12,proficiency: {name: "Skill: History"}}, {value: 10,proficiency: {name: "Skill: History"}}],
        special_abilities: [{name: "Amphibious" , desc: "The aboleth can breathe air and water."}, {name: "Mucous Cloud", desc: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."}, {name: "Probing Telepathy", desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."}]})

    const monsterHandler = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const theMonster = props.monsters.find(monster => monster.name === (event.target as HTMLParagraphElement).id)
        fetch(`https://www.dnd5eapi.co${theMonster?.url}`)
        .then(response => response.json())
        .then(data => {
            setCurrentMonster(data)
        })
    }

    const monsterSearchHandler = (monsterName:string) => {
        const theMonster = props.monsters.find(monster => monster.name.toUpperCase() === monsterName.toUpperCase())
        if (theMonster === undefined) {
            setMonsterNotFound(true)
        } else {
            fetch(`https://www.dnd5eapi.co${theMonster?.url}`)
            .then(response => response.json())
            .then(data => {
                setCurrentMonster(data)
            setMonsterNotFound(false)
            })
        }
    }    

    return (
        <div className="monster-section">
            <MonstersList monsters={props.monsters} monsterHandler={monsterHandler}/>
            <MonsterDetails currentMonster={currentMonster} monsterSearchHandler={monsterSearchHandler} monsterNotFound={monsterNotFound}/>
        </div>
    )
}

export default MonsterSection