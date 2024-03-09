import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { closeUpdateAccountForm } from "../../../Redux/Reducer/Account/CreateUpdateAccountFormReducer";
import {
  actionGetListAccountsAPI,
  actionUpdateAccountAPI,
} from "../../../Redux/Reducer/Account/accountSliceReducer";
// import { actionUpdateCarAPI } from '../../../Redux/Reducer/CarSliceReducer';

function InputUpdateForm(props) {
  let { account_Update } = props;

  // declare States to save data in Input TextField
  let [userName, setUserName] = useState(account_Update.username);
  let [passWord, setPassWord] = useState(account_Update.password);
  let [firstName, setFirstName] = useState(account_Update.firstName);
  let [lastName, setLastName] = useState(account_Update.lastName);
  let [role, setRole] = useState(account_Update.role);

  let dispatch = useDispatch();

  let handleUpdateButton = () => {
    let accountUpdate = {
      id: account_Update.id,
      username: userName,
      password: passWord,
      firstName: firstName,
      lastName: lastName,
      role: role,
    };
    dispatch(actionUpdateAccountAPI(accountUpdate));
    alert("Update successfully !");
    dispatch(closeUpdateAccountForm());
  };

  // useEffect(() => {
  //   dispatch(actionGetListAccountsAPI({}));
  // }, []);

  return (
    <>
      <Form>
        {/* UserName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên đăng nhập</b>
          </Label>
          <Input
            id="userName"
            name="userName"
            placeholder="Nhập tên đăng nhập"
            type="text"
            readOnly
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Password */}
        <FormGroup>
          <Label for="exampleName">
            <b>Mật khẩu</b>
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Nhập mật khẩu"
            type="password"
            readOnly
            value={passWord}
            onChange={(event) => {
              setPassWord(event.target.value);
            }}
          />
        </FormGroup>

        {/*First name */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên họ</b>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Nhập tên họ"
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </FormGroup>

        {/*LastName name */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên </b>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Nhập tên "
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Role */}
        <FormGroup>
          <Label for="exampleYear">
            <b>Phân quyền</b>
          </Label>
          <Input
            id="role"
            name="role"
            type="select"
            value={role}
            onChange={(event) => {
              setRole(event.target.value);
            }}
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </Input>
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleUpdateButton();
          }}
        >
          Sửa
        </Button>
        <Button
          color="danger"
          // onClick={handleResetButton}
        >
          Reset
        </Button>
      </Form>
    </>
  );
}

export default InputUpdateForm;
