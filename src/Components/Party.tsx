import React, { FC } from "react"
import "../Styles/Party.css"

type Props = {
    party: {name: string, race: string, classs: string, hp: number, ac: number, str: number, con: number, dex: number, wis: number, int: number, cha: number, about: string}[], deleteMember(memberToDelete: string): void
}

const Party: FC<Props> = (props) => {

    const partyList = props.party.map(member => {
        return (
            <div className="party-member">
                <p>Name: {member.name} / Race: {member.race} / Class: {member.classs}</p>
                <p>HP: {member.hp} / AC: {member.ac}</p>    
                <p>STR: {member.str} / CON: {member.str} / DEX: {member.str} / WIS: {member.str} / INT: {member.str} / CHA: {member.str}</p>
                <button onClick={() => props.deleteMember(member.name)}>Delete</button>    
            </div>
        )
    })

    return (
        <div className="party-block">
            {partyList}
            <button>Kill'em All</button>
        </div>
    )
}

export default Party

// Child Component: PartyMember (includes stats from form inputs, and delete button)