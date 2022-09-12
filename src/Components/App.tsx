import React, {FC} from 'react';
import '../Styles/App.css';
import Nav from './Nav'
import MainSection from "./MainSection"

const App: FC = () => {

  return (
    <main>
      <Nav />
      <MainSection />
    </main>
    );
  }

export { App } ;