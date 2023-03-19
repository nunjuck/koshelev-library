import EmailIcon from '@assets/icons/email.svg'
import SendIcon from '@assets/icons/send.svg'

import { ISocialNetwork } from '@components/Footer/types'

export const SOCIAL_NETWORK_LIST: ISocialNetwork[] = [
  {
    name: 'Телеграм',
    label: '@nunjuck',
    link: 'https://t.me/nunjuck',
    icon: SendIcon
  },
  {
    name: 'Почта',
    label: 'nkoshelev@icloud.com',
    link: 'mailto:nkoshelev@icloud.com',
    icon: EmailIcon
  }
]
