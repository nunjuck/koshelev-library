import { FC } from 'react'

import { Header } from '../../components/Header'

export const Home: FC = () => {
  return (
    <div className='layout-wrapper'>
      <div className='content-wrapper'>
        <Header />
        <div>content page</div>
      </div>
      <div className='footer-wrapper'>
        <footer>footer</footer>
      </div>
    </div>
  )
}
