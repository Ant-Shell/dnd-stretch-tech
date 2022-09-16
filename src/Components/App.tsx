import {FC, useState, useEffect} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import CharacterSection from "./CharacterSection"
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
        setParty([...party, character])
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
    </main>
    )
  }

export { App }