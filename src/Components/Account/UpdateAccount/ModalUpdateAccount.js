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
import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";
import { closeUpdateAccountForm } from "../../../Redux/Reducer/Account/CreateUpdateAccountFormReducer";

function ModalUpdateAccount() {
  let dispatch = useDispatch();
  const showUpdateForm = useSelector(
    (state) => state.CreateUpdateAccountFormReducer.value
  );
  const account_Update = useSelector(
    (state) => state.CreateUpdateAccountFormReducer.accountUpdate
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
          <InputUpdateForm account_Update={account_Update} />
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => dispatch(closeUpdateAccountForm())}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateAccount;
