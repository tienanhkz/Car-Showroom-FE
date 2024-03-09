import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeUpdateCustomerTestDrivingForm } from "../../../Redux/Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer";
import { actionUpdateCustomerAPI } from "../../../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";

function InputForm(props) {
  // const listCarCategory = useSelector((state)=> state.carCategorySlice.listCarCategory);
  let { customer_Update } = props;
  const dispatch = useDispatch();
  console.log("customer_Update props : ", customer_Update);

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState(customer_Update.fullName);
  let [carType, setCarType] = useState("BMW X3");
  let [date, setDate] = useState(customer_Update.dateTestDriving);
  let [phoneNumber, setPhoneNumber] = useState(customer_Update.phoneNumber);

  let handleEditButton = () => {
    let customer_TestDriving_Update = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      dateTestDriving: date,
      carName: carType,
      id: customer_Update.id,
    };
    //console.log("customer_TestDriving_Update : ", customer_TestDriving_Update);
    dispatch(actionUpdateCustomerAPI(customer_TestDriving_Update));
    alert("Chỉnh sửa thành công");
    dispatch(closeUpdateCustomerTestDrivingForm());
  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Họ và tên (*)</b>
          </Label>
          <Input
            id="Name"
            name="Name"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* CarType */}
        <FormGroup>
          <Label for="exampleSelect">
            <b>Chọn loại xe</b>
          </Label>
          <Input
            id="CarTypeSelect"
            name="CarType"
            type="select"
            value={carType}
            onChange={(event) => {
              setCarType(event.target.value);
            }}
          >
            <option value="BMW X3">BMW X3</option>
            <option value="BMW X4">BMW X4</option>
            <option value="BMW X5">BMW X5</option>
            <option value="BMW 730li">BMW 730li</option>
            <option value="BMW Z4 All New">BMW Z4 All New</option>
            <option value="BMW 430i Convertible">BMW 430i Convertible</option>
            <option value="BMW 5-Series">BMW 5-Series</option>
            <option value="BMW 520i Msport 2022">BMW 520i Msport 2022</option>
            <option value="BMW 530i Sport-line">BMW 530i Sport-line</option>
          </Input>
        </FormGroup>
        {/* Date */}
        <FormGroup>
          <Label for="examplePrice">
            <b>Ngày lái thử</b>
          </Label>
          <Input
            id="date"
            name="date"
            // placeholder="Nhập giá xe"
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </FormGroup>

        {/* Phone */}
        <FormGroup>
          <Label for="exampleName">
            <b>Số điện thoại</b>
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </FormGroup>
        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleEditButton();
          }}
        >
          Chỉnh Sửa
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
