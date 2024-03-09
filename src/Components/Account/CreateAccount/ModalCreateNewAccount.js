import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputForm from "./InputForm";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateAccountForm } from "../../../Redux/Reducer/Account/CreateNewAccountFormReducer";

function ModalCreateNewAccount() {
  const formState = useSelector(
    (state) => state.CreateNewAccountFormReducer.value
  );

  console.log("formState : ", formState);

  const dispatch = useDispatch();

  return (
    <Container>
      <Modal isOpen={formState}>
        {/* <Modal isOpen={true}> */}
        <ModalHeader>
          <b>Thêm mới</b>
        </ModalHeader>
        <ModalBody>
          {/* Input Form */}
          <InputForm />
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              dispatch(closeCreateAccountForm());
            }}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
