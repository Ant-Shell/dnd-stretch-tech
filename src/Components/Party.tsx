import { FC } from "react"
import "../Styles/Party.css"
import { PartyStructure } from "../types"

type Props = {
    party: PartyStructure
    deleteMember(memberToDelete: string): void
    killemAll: () => void
}

const Party: FC<Props> = (props) => {

    const partyList = props.party.map(member => {
        return (
            <div className="party-member">
                <p>Name: {member.name} / Race: {member.race} / Class: {member.classs}</p>
                <p>HP: {member.hp} / AC: {member.ac}</p>    
                <p>STR: {member.str} / CON: {member.con} / DEX: {member.dex} / WIS: {member.wis} / INT: {member.int} / CHA: {member.cha}</p>
                <button className="delete" onClick={() => props.deleteMember(member.name)}>Delete</button>    
            </div>
        )
    })

    return (
        <div className="party-block">
            <div className="party-wrapper">
                {partyList}
            </div>
            <button id="killAll" onClick={() => props.killemAll()}>Kill'em All</button>
        </div>
    )
}

export default Party