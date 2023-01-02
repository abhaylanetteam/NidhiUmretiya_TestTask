import React, { useState } from 'react';

import { Button, Modal } from 'antd';


const CustomModal = ({modalOpen, handleOpenModal, children, ...rest}) => {
    return (
        <Modal title="Basic Modal"  footer={false} open={modalOpen} onOk={handleOpenModal} onCancel={handleOpenModal}>
                {children}
      </Modal>
    )
}
export default CustomModal