import { FC } from 'react'

import styles from './TemplateName.module.css'
import { ITemplateNameProp } from './types'

export const TemplateName: FC<ITemplateNameProp> = (props) => {
  const { className } = props
  return <div className={`${styles.TemplateName} ${className}`}>TemplateName component</div>
}
