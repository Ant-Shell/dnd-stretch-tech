import React, {FC, useState, useEffect} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import MainSection from "./MainSection"
import MonsterSection from "./MonsterSection"
import { AppStateStructure } from "../types"
import { fetchMonsters } from "../apiCalls"

const App: FC = () => {

  // give app state   vvvv

  const [monsters, setMonsters] = useState<AppStateStructure>([])
  const [monsterView, setMonsterView] = useState<boolean>(false)

  // useEffect for fetch
  // set data to state      vvvv

  useEffect(() => {
    fetchMonsters()
    .then((data: any) => {
      console.log(data.results)
      setMonsters(data.results)
    })
  }, [])

  const monsterViewHandler = () => {
        if (!monsterView) {
          setMonsterView(true)
        } else {
          setMonsterView(false)
        }
  }

  return (
    <main>
      <Nav monsterViewHandler={() => monsterViewHandler()}/>
      {(!monsterView) && <MainSection />}
      {(monsterView) && <MonsterSection monsters={monsters}/>}
    </main>
    );
  }

export { App } ;