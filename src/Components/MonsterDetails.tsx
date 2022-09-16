import { FC, useState } from "react"
import "../Styles/MonsterDetails.css"
import { MonsterStructure } from "../types"

type Props = {
    currentMonster: MonsterStructure
    monsterSearchHandler: (monsterName:string) => void
}

const MonsterDetails:FC<Props> = ({currentMonster, monsterSearchHandler}) => {

    const [searchInput, setsearchInput] = useState<string>("")

    const proficiencies = currentMonster.proficiencies.map((prof:any) => {
        return <p>{prof.proficiency.name}: {prof.value}</p>
    })

    const specialAbilities = currentMonster.special_abilities.map((spec:any) => {
        
        return <div className="special"><h3 className="special-ability-name">{spec.name}</h3> <p className="special-description">{spec.desc}</p></div>
    })

    return (
        (currentMonster) &&
        <div className="monster-details">
            <div className="search-bar-container">
                <h1 className="current-monster">{currentMonster.name}</h1>
                <input 
                    type="text"
                    placeholder="Search for Monster" 
                    className="search-bar"
                    value={searchInput}
                    id="search"
                    onChange={(event) => setsearchInput(event.target.value)}>
                </input>
                <button className="monster-search-button" onClick={() => monsterSearchHandler(searchInput)}>SUBMIT</button>
                </div>
            <div className="stat-ability-wrapper">
                <div className="monster-stats">
                    <h2 className="stat-title">{currentMonster.name} Stats</h2>
                    <p className="monster-stat">Challenge Rating: {currentMonster.challenge_rating}</p>
                    <p className="monster-stat">XP: {currentMonster.xp}</p>
                    <p className="monster-stat">Size: {currentMonster.size}</p>
                    <p className="monster-stat">Type: {currentMonster.type}</p>
                    <p className="monster-stat">Alignment: {currentMonster.alignment}</p>
                    <p className="monster-stat">Languages: {currentMonster.languages}</p>
                    <p className="monster-stat">AC: {currentMonster.armor_class}</p>
                    <p className="monster-stat">HP: {currentMonster.hit_points}</p>
                    <div className="proficiencies">
                        <h3>Proficiencies</h3>
                        {(!proficiencies.length) ? <h3>No proficiencies.</h3> : proficiencies}
                    </div>
                </div>
                <div className="special-abilities">
                    <h2>Special Abilities</h2>
                    <div className="special-wrapper">
                        {(!specialAbilities.length) ? <h2>No special abilities.</h2> : specialAbilities}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonsterDetails