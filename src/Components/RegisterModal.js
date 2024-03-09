import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { closeForm2 } from "../Redux/Reducer/formSlice2";
import { actionAddCustomerAPI } from "../Redux/Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer";
import { actionFetchListCarsAPI_MDW } from "../Redux/Reducer/CarSliceReducer";

function RegisterModal(props) {
  // declare State
  let [fullName, setFullName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [carType, setCarType] = useState(1);
  let [payments, setPayments] = useState("1");

  const showFormRTK = useSelector((state) => state.formSlice2.value);
  const dispatch = useDispatch();

  //let [listCustomer, setListCustomer] = useState([]);

  // function reset test driving register modal
  let resetModal = () => {
    setFullName("");
    setCarType("");
    setPayments("");
    setPhoneNumber("");
  };
  let onHandleChange = (event) => {
    setPayments(event.target.value);
    // console.log(event.target.value);
    //console.log(payments);
  };

  // useEffect(() => {
  //   dispatch(actionFetchListCarsAPI_MDW({}));
  // }, []);

  let listCar = useSelector((state) => state.carReducer.listCar);
  //let listCar = selectListCar(stateRedux);

  //console.log("listCar register modal : ", listCar);
  let items = "";
  items = listCar.map((car) => {
    return <option value={car.id}>{car.name}</option>;
  });

  // function handle register
  let onHandleRegister = () => {
    let paymentMethod = "";
    if (payments == 0) {
      paymentMethod = "Trả thẳng";
    } else {
      paymentMethod = "Trả góp";
    }

    let customer = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      carId: carType,
      paymentMethod: paymentMethod,
    };

    // console.log("customer : ", customer);
    dispatch(actionAddCustomerAPI(customer));
    // alert success
    alert("Đăng ký thành công !");
    // close modal
    dispatch(closeForm2());
    // reset textfield in modal
    resetModal();
  };

  return (
    <Modal isOpen={showFormRTK}>
      <ModalHeader>ĐĂNG KÝ BÁO GIÁ XE</ModalHeader>
      <ModalBody>
        <p>
          Chào anh chị, để nhận được{" "}
          <b style={{ color: "red" }}>“Báo giá đặc biệt”</b> từ{" "}
          <b style={{ color: "red" }}>BMW Thạch Thất</b>, các anh chị hãy liên
          hệ ngay theo số <b style={{ color: "red" }}>092.246.7899</b> hoặc điền
          thông tin vào form báo giá dưới đây. Xin cảm ơn!
        </p>

        <form role="form" style={{ lineHeight: "2.5" }}>
          <div class="form-group">
            <label for="">
              <b>Họ và tên (*)</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Nhập tên của bạn"
              required
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="">
              <b>Điện thoại (*)</b>
            </label>
            <input
              type="number"
              class="form-control"
              id="name"
              placeholder="Nhập số điện thoại của bạn"
              required
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="">
              <b>Chọn xe (*)</b>
            </label>
            <select
              value={carType}
              onChange={(event) => {
                setCarType(event.target.value);
              }}
              class="form-select"
              aria-label="Default select example"
            >
              {items}
            </select>
          </div>
          <label for="">
            <b>Hình thức (*)</b>
          </label>

          <div
            class="form-group"
            style={{ lineHeight: "1.2", margin: "0 6px" }}
          >
            <input
              type="radio"
              class="form-check-input"
              id="validationFormCheck2"
              name="radio-stacked"
              required
              checked={payments === "0"}
              value="0"
              onChange={onHandleChange}
            />
            <label
              class="form-check-label"
              for="validationFormCheck2"
              style={{ margin: "0 14px" }}
            >
              Trả thẳng
            </label>
            <input
              type="radio"
              class="form-check-input"
              id="validationFormCheck2"
              name="radio-stacked"
              required
              checked={payments === "1"}
              value="1"
              onChange={onHandleChange}
            />
            <label
              class="form-check-label"
              for="validationFormCheck2"
              style={{ margin: "0 14px" }}
            >
              Trả góp
            </label>
          </div>
        </form>
        <button
          onClick={() => {
            onHandleRegister();
          }}
          class="btn btn-primary"
          style={{ marginTop: "16px" }}
        >
          Đăng ký
        </button>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => dispatch(closeForm2())} color="danger">
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default RegisterModal;
