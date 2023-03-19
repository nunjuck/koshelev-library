import { FC } from 'react'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

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
        <Footer />
      </div>
    </div>
  )
}
