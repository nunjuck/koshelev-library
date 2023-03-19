import { FC } from 'react'

import { Home } from './pages/Home'

import './styles/global.css'

const App: FC = () => {
  return (
    <div className='app'>
      <Home />
    </div>
  )
}

export default App
