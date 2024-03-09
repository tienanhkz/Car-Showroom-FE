import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { closeUpdateCustomerForm } from "../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer";
import { actionUpdateCustomerAPI } from "../../../Redux/Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer";
import { actionFetchListCarsAPI_MDW } from "../../../Redux/Reducer/CarSliceReducer";

function InputForm(props) {
  let { customerUpdate } = props;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchListCarsAPI_MDW({}));
  }, []);

  let listCar = useSelector((state) => state.carReducer.listCar);

  let items = "";
  items = listCar.map((car, index) => {
    return (
      <>
        <option value={car.id}>{car.name}</option>
      </>
    );
  });

  //let _car = listCar.find((car) => car.name == customerUpdate.carName);

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState(customerUpdate.fullName);
  let [phoneNumber, setPhoneNumber] = useState(customerUpdate.phoneNumber);
  let [carType, setCarType] = useState(1);
  let [paymentMethod, setPaymentMethod] = useState(
    customerUpdate.paymentMethod
  );
  //
  let handleCreateButton = () => {
    let customer_Update = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      carId: carType,
      paymentMethod: paymentMethod,
      id: customerUpdate.id,
    };

    dispatch(actionUpdateCustomerAPI(customer_Update));
    alert("Chỉnh sửa thành công !");
    dispatch(closeUpdateCustomerForm());
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
            <b>Hình thức</b>
          </Label>{" "}
          <br />
          <Input
            name="gender"
            type="radio"
            value="Trả thẳng"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
          />{" "}
          Trả thẳng
          <Input
            name="gender"
            type="radio"
            value="Trả góp"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
            style={{ marginLeft: "20px" }}
          />{" "}
          Trả góp
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleCreateButton();
          }}
        >
          Chỉnh sửa
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
