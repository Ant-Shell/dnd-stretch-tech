import React from "react"
import "../Styles/CharacterCreator.css"

const CharacterCreator = () => {
    return (
        <div className="character-creator">
            <h3>This is the Character Creator.</h3>
            Name: <input/>
            Race: <input/>
            Class: <input/>
            HP: <input/>
            AC: <input/>
            <button>Randomize</button>
            <div className="ability-score-wrapper">
                <div>STR <input className="ability-score"/></div>
                <div>CON <input className="ability-score"/></div>
                <div>DEX <input className="ability-score"/></div>
                <div>WIS <input className="ability-score"/></div>
                <div>INT <input className="ability-score"/></div>
                <div>CHA <input className="ability-score"/></div>
            </div>
        </div>
    )
}

export default CharacterCreator

// Need inputs for Name, Race, Class, HP, AC, 6 Stats, About me

// Need three buttons.
// one for randomizing input values (besides about me?)
// one for adding a character to the party block
// one to clear all inputs.