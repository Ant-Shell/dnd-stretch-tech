import React, { useState, FC } from "react"
import "../Styles/MonsterDetails.css"

type Props = {
    currentMonster: {
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
}

const MonsterDetails:FC<Props> = ({currentMonster}) => {

    const proficiencies = currentMonster.proficiencies.map(prof => {
        return <p>{prof.proficiency.name}: {prof.value}</p>
    })

    //  <div className="special"><h3 className="special-ability-name">Brute</h3> <p className="special-description">A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p></div>

    const specialAbilities = currentMonster.special_abilities.map(spec => {
        return <div className="special"><h3 className="special-ability-name">Brute</h3> <p className="special-description">A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p></div>
    })

    return (
        (currentMonster) &&
        <div className="monster-details">
            <h1>{currentMonster.name}</h1>
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
                        {proficiencies}
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