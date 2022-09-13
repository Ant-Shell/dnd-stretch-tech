import React from "react"
import "../Styles/MonstersList.css"

type Props = {
    monsters: {name: string}[]
    monsterHandler: (event: any) => void
}

const MonstersList = (props: Props) => {

    const monsterList = props.monsters.map(monster => {
        return <p onClick={(event) => props.monsterHandler(event)} id={monster.name} className="single-monster">{monster.name}</p>
    })

    return (
        <div className="monsters-list">
            {monsterList}
        </div>
    )
}

export default MonstersList