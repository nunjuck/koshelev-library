import { FC } from 'react'

import { SOCIAL_NETWORK_LIST } from './constants'
import styles from './Footer.module.css'
import { IFooterProp } from './types'

export const Footer: FC<IFooterProp> = (props) => {
  const { className } = props

  return (
    <div className={`${styles.footer} ${className}`}>
      <div className='container'>
        <ul className={styles['social-network-list']}>
          {SOCIAL_NETWORK_LIST.map((socialNetwork) => (
            <li key={socialNetwork.name} className={styles['social-network-item']}>
              <a href={socialNetwork.link} className={styles['social-network-link']}>
                <img
                  src={socialNetwork.icon}
                  className={styles['social-network-icon']}
                  alt={`Иконка ${socialNetwork.name}`}
                />
                {socialNetwork.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
