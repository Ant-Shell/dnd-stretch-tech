import React, { useState } from "react"
import "../Styles/MonsterDetails.css"

type MonsterStructure = {
    name: string
}

const MonsterDetails = () => {

    const [currentMonster, setCurrentMonster] = useState<MonsterStructure>({name: 'Bugbear'})

    return (
        <div className="monster-details">
            <h1>{currentMonster.name}</h1>
            <div className="stat-ability-wrapper">
                <div className="monster-stats">
                    <h2 className="stat-title">{currentMonster.name} Stats</h2>
                    <p className="monster-stat">Challenge Rating: 1</p>
                    <p className="monster-stat">XP: 200</p>
                    <p className="monster-stat">Size: Medium</p>
                    <p className="monster-stat">Type: Humanoid</p>
                    <p className="monster-stat">Subtype: Goblinoid</p>
                    <p className="monster-stat">Alignment: Chaotic Evil</p>
                    <p className="monster-stat">Languages: Common, Goblin</p>
                    <p className="monster-stat">AC: 16</p>
                    <p className="monster-stat">HP: 27</p>
                    <div className="proficiencies">
                        <h3>Proficiencies</h3>
                        <p>- Stealth: 6</p>
                        <p>- Survival: 2</p>
                    </div>
                </div>
                <div className="special-abilities">
                    <h2>Special Abilities</h2>
                    <div className="special-wrapper">
                        <div className="special"><h3 className="special-ability-name">Brute</h3> <p className="special-description">A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p></div>
                        <div className="special"><h3 className="special-ability-name">Surprise Attack</h3> <p className="special-description">If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage fromthe attack.</p></div>
                        <div className="special"><h3 className="special-ability-name">Brute</h3> <p className="special-description">A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p></div>
                        <div className="special"><h3 className="special-ability-name">Surprise Attack</h3> <p className="special-description">If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage fromthe attack.</p></div>
                        <div className="special"><h3 className="special-ability-name">Brute</h3> <p className="special-description">A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p></div>
                        <div className="special"><h3 className="special-ability-name">Surprise Attack</h3> <p className="special-description">If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage fromthe attack.</p></div>
                        <div className="special"><h3 className="special-ability-name">Brute</h3> <p className="special-description">A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p></div>
                        <div className="special"><h3 className="special-ability-name">Surprise Attack</h3> <p className="special-description">If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage fromthe attack.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonsterDetails