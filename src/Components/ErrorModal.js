import React from 'react';
import { Modal, Button, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeErrorModal } from '../store/actions';

const ErrorModal = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.showErrorModal);
    console.log(show)
    const message = useSelector(state => state.errorMessage);
    const handleClose = () => { dispatch(closeErrorModal()) }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: '#dc3545' }}>ERROR</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>OK</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;