import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-layout'
import type { ForwardRefExoticComponent } from 'react'

import type { KeyDictionary } from '@/comm/comm.face'

export interface IndexeMenuItem extends MenuDataItem {
  icon: string
}
export const icons: KeyDictionary<ForwardRefExoticComponent<any>> = {
  SmileOutlined,
  HeartOutlined
}
const asideMenuConfig: IndexeMenuItem[] = [
  {
    name: 'home',
    path: '/',
    icon: 'SmileOutlined'
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'HeartOutlined',
    children: [
      {
        name: 'Dashboard Page1',
        path: '/dashboard/page1',
        icon: 'SmileOutlined'
      }
    ]
  }
]

export { asideMenuConfig }
