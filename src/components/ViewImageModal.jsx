import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ViewImageModal({
  showModalImg,
  dataImg,
  onHide,
  ...props
}) {
  return (
    <Modal
      className='product-img-view-modal'
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onHide={onHide}
      show={showModalImg}
      {...props}
    >
      <Modal.Body>
        <div className='_product-image-modal'>
          <img className='img-fluid' src={dataImg} alt='' />
        </div>
      </Modal.Body>
    </Modal>
  );
}
