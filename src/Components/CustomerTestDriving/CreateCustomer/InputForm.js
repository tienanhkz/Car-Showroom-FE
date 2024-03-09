import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateCustomerTestForm } from "../../../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer";
import { actionAddCustomerTestDrivingAPI } from "../../../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";
import { actionFetchListCarsAPI_MDW } from "./../../../Redux/Reducer/CarSliceReducer";

function InputForm() {
  let dispatch = useDispatch();

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState("");
  let [carType, setCarType] = useState("BMW X3");
  let [date, setDate] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    dispatch(actionFetchListCarsAPI_MDW({}));
  }, []);

  let listCar = useSelector((state) => state.carReducer.listCar);

  let items = "";
  items = listCar.map((car, index) => {
    return (
      <>
        <option value={car.name}>{car.name}</option>
      </>
    );
  });

  let handleCreateButton = () => {
    let customer = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      dateTestDriving: date,
      carName: carType,
    };
    dispatch(actionAddCustomerTestDrivingAPI(customer));
    console.log("customer : ", customer);
    alert("Thêm mới thành công !");
    dispatch(closeCreateCustomerTestForm());
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
            placeholder="Nhập tên khách hàng"
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
            {items}
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
            placeholder="Nhập số điện thoại"
            type="number"
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
            handleCreateButton();
          }}
        >
          Tạo mới
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
