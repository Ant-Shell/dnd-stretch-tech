import { FC } from "react"
import "../Styles/MonstersList.css"

type Props = {
    monsters: {name: string}[]
    monsterHandler: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
}

const MonstersList:FC<Props> = (props) => {

    const monsterList = props.monsters.map(monster => {
        return <p onClick={(event) => props.monsterHandler(event)}  id={monster.name} className="single-monster" key={monster.name}>{monster.name}</p>
    })

    return (
        <div className="monsters">
            <h2>Monster List</h2>
            <div className="monsters-list">
            {monsterList.length ? monsterList : <h1 className="error-msg">No monsters available at this time!</h1>}
            </div>
        </div>
    )
}

export default MonstersList