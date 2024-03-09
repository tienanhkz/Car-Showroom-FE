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
import { closeCreateNewsForm } from "../../../Redux/Reducer/News/CreateNewNewsFormReducer";
// import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";

function ModalCreateNewNews() {
  const formState = useSelector(
    (state) => state.CreateNewNewsFormReducer.value
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Modal isOpen={formState}>
        {/* <Modal isOpen={false}> */}
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
              dispatch(closeCreateNewsForm());
            }}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewNews;
