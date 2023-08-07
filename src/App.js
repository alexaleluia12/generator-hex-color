import React from 'react'

import Header from './components/Header';
import Button from './components/Button';
import Colors from './components/Colors';

import './style.css'

const App = () => {

  const [tg, setTg] = React.useState(true);

  const handleClick = () => {
    console.log('novas cores ...')
    setTg(!tg)
  }

  return (
    <main>
      <Header />
      <Button onClick={handleClick}/>
      <Colors />
    </main>
  )
}

export default App;