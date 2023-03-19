import { FC } from 'react'

import styles from './Avatar.module.css'
import { IAvatarProp } from './types'

export const Avatar: FC<IAvatarProp> = (props) => {
  const { imageSrc, altMessage } = props

  return (
    <div className={styles['avatar']}>
      <img className={styles['image']} src={imageSrc} alt={altMessage} />
    </div>
  )
}
