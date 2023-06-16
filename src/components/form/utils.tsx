import type { IDrawerProps, IFormLayoutProps, IModalProps } from '@formily/antd-v5'
import { FormButtonGroup, FormDialog, FormDrawer, FormLayout, Submit } from '@formily/antd-v5'
import type { Form } from '@formily/core'
import { Button, message } from 'antd'
import type { ReactNode } from 'react'

interface IProps {
  schemaField: ReactNode
  title: IModalProps | string
  onConfirm: (values: any, form: Form) => Promise<any>
  PortalId?: string
  formLayoutProps?: IFormLayoutProps
}
export const openDefDialog = (props: IProps) => {
  const { title, onConfirm, schemaField, PortalId = 'form-dialog', formLayoutProps = { labelCol: 6 } } = props
  return FormDialog(title as any, PortalId, () => {
    return <FormLayout {...formLayoutProps}>{schemaField}</FormLayout>
  }).forConfirm((form, next) => {
    onConfirm(form.values, form)
      .then(() => {
        void message.success('Operation succeeded')
        next()
      })
      .catch(() => {
        form.setSubmitting(false)
      })
  })
}
interface IDrawer {
  title: IDrawerProps | string
  formRender: (form: Form) => ReactNode
  onOk?: (val: any) => void
  okText?: ReactNode
  onClose?: () => void
  disabled?: boolean
  PortalId?: string
}
export const openFormDrawer = (props: IDrawer) => {
  const { title, formRender, onOk, okText = 'OK', onClose, disabled = false, PortalId = 'form-drawer' } = props
  const drawer = FormDrawer(Object.assign({}, title, { maskClosable: true, onClose }), PortalId, (form) => {
    return (
      <>
        {formRender(form)}
        <FormDrawer.Footer>
          <FormButtonGroup align='center'>
            {!disabled && <Submit onSubmit={onOk}>{okText}</Submit>}
            <Button
              onClick={() => {
                onClose?.()
                drawer.close()
              }}
            >
              cancel
            </Button>
          </FormButtonGroup>
        </FormDrawer.Footer>
      </>
    )
  })
  return drawer
}

export const obj2List = (obj: Record<any, any>) => {
  return Object.keys(obj).map((key) => {
    return {
      label: obj[key],
      value: key,
    }
  })
}

export const list2Obj = (list?: any[]) => {
  if (list == null) return {}
  return list.reduce((acc, item) => {
    acc[item.value] = item.label
    return acc
  }, {})
}
