import React, {FC, useState, useEffect} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import MainSection from "./MainSection"
import { AppStateStructure } from "../types"
import { fetchMonsters } from "../apiCalls"

const App: FC = () => {

  // give app state   vvvv

  const [monsters, setMonsters] = useState<AppStateStructure>([])

  // useEffect foar fetch
  // set data to state      vvvv

  useEffect(() => {
    fetchMonsters()
    .then((data: any) => setMonsters(data.results))
  }, [])


  return (
    <main>
      <Nav />
      <MainSection monsters={monsters}/>
    </main>
    );
  }

export { App } ;