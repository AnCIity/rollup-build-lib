import React from 'react'
import { Modal } from 'antd'
import { DirectiveElement, IDirectiveProps } from '../directive'
import './testModal.less'

const TestModal: React.FC<IDirectiveProps<{ name: string }>> = props => {
  return (
    <Modal className='test-modal' title='测试弹窗' centered visible={props.visible} onCancel={() => props.hide()}>
      <p className='test-modal-p'>
        名称：<span className='test-modal-span'>{props.name || '你没有填写名称'}</span>
      </p>
    </Modal>
  )
}

const testModal = new DirectiveElement(TestModal, { timeout: 500 })

export const openTestModal = (params: { name: string }) => {
  testModal.open(params)
}
