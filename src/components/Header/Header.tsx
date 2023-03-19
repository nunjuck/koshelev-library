import myPhoto from '@assets/images/my-photo@2x.jpg'
import { FC } from 'react'

import { Avatar } from '../../ui/Avatar'

import styles from './Header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className='container'>
        <div className={styles['my-info']}>
          <Avatar imageSrc={myPhoto} altMessage='Фотография Кошелева Никиты' />
          <div className={styles['name']}>Никита Кошелев</div>
        </div>
      </div>
    </header>
  )
}
