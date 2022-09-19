import {FC, useState, useEffect} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import CharacterSection from "./CharacterSection"
import Error from "./Error"
import MonsterSection from "./MonsterSection"
import { AppStateStructure } from "../types"
import { fetchMonsters } from "../apiCalls"
import { Route, Switch} from "react-router-dom"
import { PartyStructure, CharacterStructure } from "../types"

const App: FC = () => {

  const [monsters, setMonsters] = useState<AppStateStructure>([])
  const [party, setParty] = useState<PartyStructure>([])
  const [hasError, setHasError] = useState<boolean>(false)

    const submitForm = (event: React.FormEvent<HTMLFormElement>, character: CharacterStructure) => {
        event.preventDefault()
        const duplicateCheck = party.find(member => member.name === character.name)
        if (duplicateCheck?.name !== undefined) {
          setHasError(true)
        } else {
          setHasError(false)
          setParty([...party, character])
        }
    }

    const deleteMember = (memberToDelete: string): void => {
        setParty(party.filter((member) => {
            return member.name !== memberToDelete
        }))
    }

    const killemAll = () => {
        setHasError(false)
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
      <Switch>
        <Route exact path="/dungeons&documents" render={() => <CharacterSection party={party} submitForm={submitForm} deleteMember={deleteMember} killemAll={killemAll} hasError={hasError}/>}/>
        <Route exact path="/dungeons&documents/monsters" render={() => <MonsterSection monsters={monsters}/>}/>
        <Route path="*" render={()=> <Error/>}/>
      </Switch>
    </main>
    )
  }

export { App }