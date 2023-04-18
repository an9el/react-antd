import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { FormDialog, FormDrawer } from '@formily/antd-v5'
import { Spin } from 'antd'
import { isEmpty } from 'lodash-es'
import type { ReactNode } from 'react'
import { createElement, Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { asideMenuConfig, icons } from './menuConfig'

const loopMenuItem: any = (menus: MenuDataItem[]) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: typeof icon === 'string' && !isEmpty(icon) ? createElement(icons[icon]) : undefined,
    children: children && loopMenuItem(children),
  }))

export default function BasicLayout() {
  const location = useLocation()
  return (
    <ProLayout
      logo='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
      title='React—Antd'
      location={{
        pathname: location.pathname,
      }}
      layout='mix'
      navTheme='light'
      theme='light'
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
      menuItemRender={(item: MenuDataItem, defaultDom: ReactNode) => {
        if (!item.path) {
          return defaultDom
        }
        return <Link to={item.path}>{defaultDom}</Link>
      }}
      fixSiderbar
      fixedHeader>
      <div style={{ minHeight: '60vh' }}>
        <Suspense
          fallback={
            <div className='text-center pt-11'>
              <Spin />
            </div>
          }>
          <Outlet />
        </Suspense>
        <FormDialog.Portal />
        <FormDrawer.Portal />
      </div>
    </ProLayout>
  )
}
