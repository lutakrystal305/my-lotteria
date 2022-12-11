import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalCustom = ({ children, isOpen }) => {
  return(
    <div className='ModalCustom'>
      <Modal isOpen={isOpen}>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalCustom  