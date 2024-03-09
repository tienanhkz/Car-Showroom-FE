import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputUpdateForm from "./InputUpdateForm";
import { useDispatch, useSelector } from "react-redux";
import { closeUpdateNewsForm } from "../../../Redux/Reducer/News/CreateUpdateNewsFormReducer";
// import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";

function ModalUpdateNews() {
  let dispatch = useDispatch();
  const showUpdateForm = useSelector(
    (state) => state.CreateUpdateNewsFormReducer.value
  );
  const news_Update = useSelector(
    (state) => state.CreateUpdateNewsFormReducer.newsUpdate
  );

  return (
    <Container>
      <Modal isOpen={showUpdateForm}>
        {/* <Modal isOpen={true}> */}
        <ModalHeader>
          <b>Chỉnh sửa</b>
        </ModalHeader>
        <ModalBody>
          {/* Input Form */}
          <InputUpdateForm news_Update={news_Update} />
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => dispatch(closeUpdateNewsForm())}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateNews;
