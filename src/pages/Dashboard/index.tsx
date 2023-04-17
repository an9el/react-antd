import { PageContainer } from '@ant-design/pro-components'
import { useQuery } from '@tanstack/react-query'
import { Button, Card, Typography } from 'antd'
import produce from 'immer'
import type { FC } from 'react'
import { useState } from 'react'

import { HomeApi } from '@/api'
import { BaseApiConfig } from '@/comm/baseApi.config'

const homeApi = new HomeApi(BaseApiConfig)

const Dashboard: FC = () => {
  const [value, setValue] = useState({
    name: 'hello',
    current: 1,
  })
  const dataQuery = useQuery(['homeApi.getPage', value], () => {
    return homeApi.getPage(value)
  })

  return (
    <PageContainer
      extra={[
        <Button
          key='but1'
          loading={dataQuery.isLoading}
          onClick={() => {
            setValue(
              produce((draft) => {
                draft.current = draft.current + 1
              }),
            )
          }}>
          next page
        </Button>,
      ]}>
      <Card loading={dataQuery.isLoading}>
        {dataQuery.data?.data?.map((item) => {
          return (
            <div key={item.id}>
              <Typography.Text>{item.title}</Typography.Text>
            </div>
          )
        })}
      </Card>
    </PageContainer>
  )
}
export default Dashboard
