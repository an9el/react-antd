import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const FormPage = lazy(() => import('@/pages/Form'))

export const formRouters: RouteObject[] = [
  {
    path: 'formily',
    element: <FormPage />,
  },
]
