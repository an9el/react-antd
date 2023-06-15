import './index.css'

import NiceModal from '@ebay/nice-modal-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App as AntdApp, ConfigProvider, message } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/locale/zh-cn'
import { StrictMode } from 'react'
import { AuthProvider } from 'react-auth-kit'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

dayjs.locale(dayjsLocal)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (err) => {
        void message.error((err as any).message)
      },
    },
    mutations: {
      onError: (err) => {
        void message.error((err as any).message)
      },
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <AuthProvider authName='_auth' authType='localstorage'>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>
            <ConfigProvider locale={zhCN}>
              <AntdApp>
                <App />
              </AntdApp>
            </ConfigProvider>
          </NiceModal.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
