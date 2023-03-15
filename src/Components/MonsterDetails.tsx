import { FC, useState } from "react"
import "../Styles/MonsterDetails.css"
import { MonsterStructure } from "../types"

type Props = {
    currentMonster: MonsterStructure
    monsterSearchHandler: (monsterName:string) => void
    monsterNotFound: boolean
}

const MonsterDetails:FC<Props> = ({currentMonster, monsterSearchHandler, monsterNotFound}) => {

    const [searchInput, setsearchInput] = useState<string>("")

    const proficiencies = currentMonster.proficiencies.map((prof, index) => {
        return <p key={index}>{prof.proficiency.name}: {prof.value}</p>
    })

    const specialAbilities = currentMonster.special_abilities.map((spec) => {
        
        return <div className="special" key={spec.desc}><h3 className="special-ability-name">{spec.name}</h3> <p className="special-description">{spec.desc}</p></div>
    })

    const monsterNotFoundMesage = monsterNotFound === true && <span className="search-error-message">Monster not found.</span>

    const armorClassValue = currentMonster.armor_class[0]['value']

    return (
        (currentMonster) &&
        <div className="monster-details">
            <div>
                <header className="head">
                    <div className="title">
                        <h1 className="current-monster">{currentMonster.name}</h1>
                    </div>
                    <div className="search-bar-container">
                        <input
                            type="text"
                            placeholder="Search for Monster"
                            className="search-bar"
                            value={searchInput}
                            id="search"
                            onChange={(event) => setsearchInput(event.target.value)}>
                        </input>
                        <button className="monster-search-button" onClick={() => monsterSearchHandler(searchInput)}>SEARCH</button>
                        {monsterNotFoundMesage}
                    </div>
                </header>
            </div>
            <div className="stat-ability-wrapper">
                <div className="monster-stats">
                    <h2 className="stat-title">Stats</h2>
                    <p className="monster-stat">Challenge Rating: {currentMonster.challenge_rating}</p>
                    <p className="monster-stat">XP: {currentMonster.xp}</p>
                    <p className="monster-stat">Size: {currentMonster.size}</p>
                    <p className="monster-stat">Type: {currentMonster.type}</p>
                    <p className="monster-stat">Alignment: {currentMonster.alignment}</p>
                    <p className="monster-stat">Languages: {currentMonster.languages}</p>
                    <p className="monster-stat">AC: {armorClassValue}</p>
                    <p className="monster-stat">HP: {currentMonster.hit_points}</p>
                </div>
                <div className = "container">   
                <div className="special-abilities">
                    <h2>Special Abilities</h2>
                    <div className="special-wrapper">
                        {(!specialAbilities.length) ? <h2>No special abilities.</h2> : specialAbilities}
                    </div>
                </div>
                    <div className="proficiencies">
                        <h3>Proficiencies</h3>
                        <div className="proficiency-wrapper">
                            {(!proficiencies.length) ? <h3>No proficiencies.</h3> : proficiencies}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonsterDetails