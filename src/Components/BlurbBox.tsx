import {FC} from "react"
import { blurbs } from "../ClassBlurbs"
import "../Styles/BlurbBox.css"
import { CharacterStructure } from "../types"

type Props = {
    currentClass: string
    character: CharacterStructure | undefined
}

const BlurbBox:FC<Props> = ({ currentClass, character }) => {

   const theBlurb = blurbs.reduce((acc, blurb) => {
        if (blurb[0] === currentClass) {
            acc.push(blurb[1])
        }
        return acc
   }, [] as Array<string>)

    return (
        (character) ? <div className="blurb-box">               
                            <h1>{character.name}</h1>
                            <p>Class: {character.classs}</p>
                            <p>Race: {character.race}</p>
                            <p>HP: {character.hp}</p>
                            <p>AC: {character.ac}</p>
                            <p>{character.about}</p>
                        </div> :
        <div className="blurb-box">
            {(currentClass) ? <h1>The {currentClass}</h1>: 
            <div>
                <h1>Welcome to Dungeons & Documents!</h1>
                <div className="the-blurb">
                <p>Where all your character creation problems come to an end! To the left you will see the Character Creation Form. 
                    There you can fill out all the neccessary information and submit your character. 
                    Upon submission, your hero will appear in the "Party Block" to the right.
                    Don't feel like rolling dice or making those big decisions? Not to worry! 
                    Simply click the "Randomize" button and we'll take care of that for you!
                    If you are unhappy with your character so far, just click the "Clear" button and start over!
                </p><br></br>
                <p>Oh! Don't forget to check out the Monster Manual Page to get the scoop on possible friends or foes you may encounter during your adventures!
                    After all... preparation is paramount.
                </p>
                </div>
            </div>}
            <article className="the-blurb">{theBlurb}</article>
        </div>
    )
}

export default BlurbBox

