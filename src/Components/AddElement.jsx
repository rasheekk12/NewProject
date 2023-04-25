import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Input,
} from "@chakra-ui/react";

const AddElement = ({ name, setName }) => {
  const [inputName, setInputName] = useState("");
  const [updateSN, setUpdateSN] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    setName(() => [
      ...name,
      { id: updateSN, name: inputName, email: updateEmail },
    ]);
    console.log(inputName);
    setInputName("");
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen}>Add to the list</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add the form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Input
                placeholder="SN"
                value={updateSN}
                onChange={(e) => setUpdateSN(e.target.value)}
              />
              <Input
                placeholder="Name "
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              <Input
                placeholder="Email"
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleClick}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddElement;
