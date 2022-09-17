import {FC, useState, useEffect} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import CharacterSection from "./CharacterSection"
import Error from "./Error"
import MonsterSection from "./MonsterSection"
import { AppStateStructure } from "../types"
import { fetchMonsters } from "../apiCalls"
import { Route } from "react-router-dom"
import { PartyStructure, CharacterStructure } from "../types"

const App: FC = () => {

  const [monsters, setMonsters] = useState<AppStateStructure>([])
  const [party, setParty] = useState<PartyStructure>([])

    const submitForm = (event: React.FormEvent<HTMLFormElement>, character: CharacterStructure) => {
        event.preventDefault()
        // console.log('Char name', character.name)
        // console.log(party[0].name)
        const dupCheck = party.find(member => member.name === character.name)
        // console.log(dupCheck?.name)
        // {dupCheck?.name === undefined ? setParty([...party, character]) : console.log("Test")}
        if (dupCheck?.name === undefined) {
          setParty([...party, character])
        } else {
          return (
            <p>`${character.name}` is in use, please select another.</p>
          )
        }
        // setParty([...party, character])
    }

    const deleteMember = (memberToDelete: string): void => {
        setParty(party.filter((member) => {
            return member.name !== memberToDelete
        }))
    }

    const killemAll = () => {
        setParty([])
    }

  useEffect(() => {
    fetchMonsters()
    .then((data: any) => {
      setMonsters(data.results)
    })
  }, [])

  return (
    <main>
      <Nav />
      <Route exact path="/" render={() => <CharacterSection party={party} submitForm={submitForm} deleteMember={deleteMember} killemAll={killemAll}/>}/>
      <Route exact path="/monsters" render={() => <MonsterSection monsters={monsters}/>}/>
      <Route path="*" render={()=> <Error/>}/>
    </main>
    )
  }

export { App }