import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAddAccountAPI,
  actionGetListAccountsAPI,
} from "../../../Redux/Reducer/Account/accountSliceReducer";
import { closeCreateAccountForm } from "../../../Redux/Reducer/Account/CreateNewAccountFormReducer";
import { getListAccountsAPI } from "../../../API/Account/AccountsAPI";

function InputForm() {
  let dispatch = useDispatch();

  // declare States to save data in Input TextField
  let [userName, setUserName] = useState("");
  let [passWord, setPassWord] = useState("");
  let [confirmPassWord, setConfirmPassWord] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [role, setRole] = useState("ADMIN");

  // add new function
  let handleCreateButton = () => {
    if (passWord === confirmPassWord) {
      let account_new = {
        username: userName,
        password: passWord,
        firstName: firstName,
        lastName: lastName,
        role: role,
      };
      dispatch(actionAddAccountAPI(account_new));
      alert("Add successfully !");
      dispatch(closeCreateAccountForm());
    } else {
      alert("Password and confirm password must be the same, please retry !");
      dispatch(closeCreateAccountForm());
    }
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
            value={passWord}
            onChange={(event) => {
              setPassWord(event.target.value);
            }}
          />
        </FormGroup>

        {/* Confirm Password */}
        <FormGroup>
          <Label for="exampleName">
            <b>Xác nhận mật khẩu</b>
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            type="password"
            value={confirmPassWord}
            onChange={(event) => {
              setConfirmPassWord(event.target.value);
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
            handleCreateButton();
          }}
        >
          Thêm mới
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

export default InputForm;
