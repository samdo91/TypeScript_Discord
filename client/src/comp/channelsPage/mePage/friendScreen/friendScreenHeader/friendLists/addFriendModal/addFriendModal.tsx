import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function AddFriendModal() {
  const [modalState, setModalState] = useState<boolean>(false);
  const handleClose = () => setModalState(false);
  const handleShow = () => setModalState(true);
  return (
    <AddFriendModals>
      <Buttons onClick={handleShow}>친구 추가하기</Buttons>

      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </AddFriendModals>
  );
}

export default AddFriendModal;
const AddFriendModals = styled.div``;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 27px;
  padding: 2px;
  width: 90px
  height: 60px;
  margin: 15px;
  border-radius: 5px;
  background-color:#18BC5D

  }
`;
