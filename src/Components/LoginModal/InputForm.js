import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
//import { closeCreateCustomerTestForm } from "../../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer";
//import { actionAddCustomerTestDrivingAPI } from "../../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";

function InputForm() {
  let dispatch = useDispatch();
  // const listCarCategory = useSelector(
  //   (state) => state.carCategorySlice.listCarCategory
  // );

  // let items = "";
  // items = listCarCategory.map((carCategory, index) => {
  //   return <option value={carCategory.name}>{carCategory.name}</option>;
  // });

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState("");
  let [carType, setCarType] = useState("BMW X3");

  let handleCreateButton = () => {
    let customer = {
      FullName: fullName,
      CarType: carType,
    };
    //dispatch(actionAddCustomerTestDrivingAPI(customer));
    alert("Thêm mới thành công !");
    //dispatch(closeCreateCustomerTestForm());
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
