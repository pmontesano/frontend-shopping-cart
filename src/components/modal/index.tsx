import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  modalOpen: boolean;
  handleModalClose: Function;
  children: any;
}

export default function ModalComponent({
  modalOpen,
  handleModalClose,
  children,
}: ModalProps) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '4px',
    boxShadow: 24,
  };

  const handleClose = () => {
    handleModalClose();
  };

  return (
    <Modal
      className='modal'
      keepMounted
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby='keep-mounted-modal-title'
      aria-describedby='keep-mounted-modal-description'
    >
      <Box sx={style}>
        <CloseIcon className='modal-close' onClick={handleClose} />
        {children}
      </Box>
    </Modal>
  );
}
