import { FC } from "react"
import "../Styles/Party.css"
import { PartyStructure, CharacterStructure } from "../types"

type Props = {
    party: PartyStructure
    deleteMember(memberToDelete: string): void
    killemAll: () => void
    setCharacter: (character: CharacterStructure | undefined) => void
}

const Party: FC<Props> = (props) => {

    const characterHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let theCharacter = props.party.find(member => member.name === (event.target as HTMLDivElement).id)
        props.setCharacter(theCharacter)
    }

    const partyList = props.party.map(member => {
        return (
            <div className="party-member" onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => characterHandler(event)} id={member.name}>
                <p onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => characterHandler(event)} id={member.name}>Name: {member.name} / Race: {member.race} / Class: {member.classs}</p>
                <p onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => characterHandler(event)} id={member.name}>HP: {member.hp} / AC: {member.ac}</p>    
                <p onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => characterHandler(event)} id={member.name}>STR: {member.str} / CON: {member.con} / DEX: {member.dex} / WIS: {member.wis} / INT: {member.int} / CHA: {member.cha}</p>
                <button className="delete" onClick={() => props.deleteMember(member.name)}>Delete</button>
            </div>
        )
    })
 
    return (
        <div className="party-block">
            <div className="party-wrapper">
                {partyList.length ? partyList : <h2 className="add-char-prompt">Hey you, stack some apples for me.  Add players to your party so we can begin!</h2>}
            </div>
            <button id="killAll" className="killAll" onClick={() => props.killemAll()}>Kill'em All</button>
        </div>
    )
}

export default Party