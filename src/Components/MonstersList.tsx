import React from "react"
import "../Styles/MonstersList.css"

type Props = {
    monsters: {name: string}[]
}

const MonstersList = (props: Props) => {

    const monsterList = props.monsters.map(monster => {
        return <p className="single-monster">{monster.name}</p>
    })

    return (
        <div className="monsters-list">
            {monsterList}
        </div>
    )
}

export default MonstersList