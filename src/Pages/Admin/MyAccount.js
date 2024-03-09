import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function MyAccount() {
  let dispatch = useDispatch();

  const [userName, setUserName] = useState("datnvhe130026");
  const [passWord, setPassWord] = useState("321654");
  const [newPassWord, setNewPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [fullName, setFullName] = useState("");

  let handleUpdate = () => {
    alert("Updated !");
  };

  return (
    <>
      <div className="container">
        {/* content */}
        <div
          class="row"
          style={{
            // border: "1px solid rgb(206, 201, 201)",
            padding: "12px 6px",
          }}
        >
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-default">
              <div class="panel-body">
                <h3>
                  <b style={{ color: "green" }}>Thông tin cá nhân</b>
                </h3>

                {/* <!-- table display list product --> */}
                <Form>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Tên đăng nhập</Label>
                        <Input
                          id="userName"
                          name="userName"
                          placeholder={userName}
                          value={userName}
                          onChange={(event) => setUserName(event.target.value)}
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Mật khẩu</Label>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder={passWord}
                          type="password"
                          value={passWord}
                          onChange={(event) => setUserName(event.target.value)}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Mật khẩu mới</Label>
                        <Input
                          id="examplePassword"
                          name="newPassword"
                          placeholder="Input new password"
                          type="password"
                          value={newPassWord}
                          onChange={(event) =>
                            setNewPassWord(event.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="confirmPassword">Xác nhận mật khẩu</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Input confirmPassword"
                          type="password"
                          value={confirmPassWord}
                          onChange={(event) =>
                            setConfirmPassWord(event.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="fullName">Họ và tên</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Input fullName"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </FormGroup>

                  <Button
                    onClick={() => handleUpdate()}
                    style={{ backgroundColor: "red" }}
                  >
                    Chỉnh sửa
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
