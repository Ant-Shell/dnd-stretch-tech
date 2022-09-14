import {FC, useState, useEffect} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import CharacterSection from "./CharacterSection"
import MonsterSection from "./MonsterSection"
import { AppStateStructure } from "../types"
import { fetchMonsters } from "../apiCalls"
import { Route } from "react-router-dom"

const App: FC = () => {

  // give app state   vvvv

  const [monsters, setMonsters] = useState<AppStateStructure>([])

  // useEffect for fetch
  // set data to state      vvvv

  useEffect(() => {
    fetchMonsters()
    .then((data: any) => {
      setMonsters(data.results)
    })
  }, [])


  return (
    <main>
      <Nav />
      <Route exact path="/" render={() => <CharacterSection/>}/>
      <Route exact path="/monsters" render={() => <MonsterSection monsters={monsters}/>}/>
    </main>
    );
  }

export { App } ;