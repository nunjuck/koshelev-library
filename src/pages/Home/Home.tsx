import { FC } from 'react'

import { Header } from '../../components/Header'

export const Home: FC = () => {
  return (
    <div className='layout-wrapper'>
      <div className='content-wrapper'>
        <Header />
        <div className='page-wrapper'>
          <main>
            <div className='container'>main content of page</div>
          </main>
        </div>
      </div>
      <div className='footer-wrapper'>
        <footer>
          <div className='container'>footer</div>{' '}
        </footer>
      </div>
    </div>
  )
}
