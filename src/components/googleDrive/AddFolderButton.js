import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddFolderButton() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');

    function openModal() {
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }
    return (
        <>
            <Button onClick={openModal} variant="outline-success" size='sm '>
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>
            <Modal show={open} onHide={closeModal} >
                <Form>
                    <Modal.Body>
                        <Form.Label>Folder Name</Form.Label>
                        <Form.Control type="text" require value={name} onChange={e => setName(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal} />
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
