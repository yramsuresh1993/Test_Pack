import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function EditPost({
    status,
    handleClose,
    titleValue,
    changeTitleHandler,
    updateTitleHandler,
}) {
    return (
        <>
            <Modal show={status} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        as="textarea"
                        value={titleValue}
                        placeholder="Leave a comment here"
                        onChange={changeTitleHandler}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        disabled={titleValue.length <= 0}
                        variant="primary"
                        onClick={updateTitleHandler}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}