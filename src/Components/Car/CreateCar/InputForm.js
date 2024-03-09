import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionAddCarAPI } from "../../../Redux/Reducer/CarSliceReducer";
import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";
// import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";
// import { actionAddCarAPI } from "../../../Redux/Reducer/CarSliceReducer";

function InputForm() {
  //
  let dispatch = useDispatch();
  //
  // const listCarCategory = useSelector(
  //   (state) => state.carCategorySlice.listCarCategory
  // );

  let items = "";
  // items = listCarCategory.map((carCategory, index) => {
  //   return <option value={carCategory.name}>{carCategory.name}</option>;
  // });

  // declare States to save data in Input TextField
  let [carName, setCarName] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [desDetail, setDesDetail] = useState("");
  let [imagePath, setImagePath] = useState("");
  let [year, setYear] = useState("2018");

  let [seatingCapacity, setSeatingCapacity] = useState("2");
  let [carFuel, setCarFuel] = useState("Xăng");
  let [country, setCountry] = useState("Đức");
  let [transmission, setTransmission] = useState("Tự động");
  let [status, setStatus] = useState("Còn hàng");

  let [carType, setCarType] = useState("SUV");

  // function to get image link
  function getImageName(imageLink) {
    // transfer path to array
    var itemArray = imageLink.split("\\");
    // get last element
    var imageName = itemArray[itemArray.length - 1];
    return imageName;
  }
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let _year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${_year}`;

  // add new function
  let handleCreateButton = () => {
    let car_new = {
      name: carName,
      image: getImageName(imagePath),
      price: price,
      information: description,
      detailInformation: desDetail,
      yearOfManufacturer: year,

      seatingCapacity: seatingCapacity,
      carFuel: carFuel,
      placeOfManufacture: country,
      transmission: transmission,
      status: status,
      createAt: currentDate,

      carCategoryName: carType,
    };
    dispatch(actionAddCarAPI(car_new));
    alert("Add successfully !");
    dispatch(closeCreateForm());
  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên xe</b>
          </Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Nhập tên xe"
            type="text"
            value={carName}
            onChange={(event) => {
              setCarName(event.target.value);
            }}
          />
        </FormGroup>
        {/* Price */}
        <FormGroup>
          <Label for="examplePrice">
            <b>Giá</b>
          </Label>
          <Input
            id="Price"
            name="Price"
            placeholder="Nhập giá xe"
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </FormGroup>
        {/* Description */}
        <FormGroup>
          <Label for="exampleDescription">
            <b>Mô tả</b>
          </Label>{" "}
          <br />
          <textarea
            style={{ width: "100%", height: "80px" }}
            id="Description"
            name="Description"
            placeholder="Nhập thông tin mô tả"
            type="textArea"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </FormGroup>
        {/* Description detail */}
        <FormGroup>
          <Label for="exampleDescriptionDetail">
            <b>Mô tả chi tiết</b>
          </Label>{" "}
          <br />
          <textarea
            style={{ width: "100%", height: "80px" }}
            id="DescriptionDetail"
            name="DescriptionDetail"
            placeholder="Nhập thông tin mô tả chi tiết"
            type="textArea"
            value={desDetail}
            onChange={(event) => {
              setDesDetail(event.target.value);
            }}
          />
        </FormGroup>
        {/* Choose file */}
        <FormGroup>
          <Label for="exampleSelect">
            <b>Chọn ảnh</b>
          </Label>
          <Input
            id="ImageSelect"
            name="Image"
            type="file"
            value={imagePath}
            onChange={(event) => {
              setImagePath(event.target.value);
            }}
          ></Input>
        </FormGroup>

        {/* Year */}
        <FormGroup>
          <Label for="exampleYear">
            <b>Năm sản xuất</b>
          </Label>
          <Input
            id="Year"
            name="Year"
            placeholder="Nhập năm sản xuất"
            type="select"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </Input>
        </FormGroup>

        {/* Seating capacity */}
        <FormGroup>
          <Label for="exampleYear">
            <b>Số chỗ ngồi</b>
          </Label>
          <Input
            id="seatingCapacity"
            name="seatingCapacity"
            placeholder="Nhập số ghế ngồi"
            type="select"
            value={seatingCapacity}
            onChange={(event) => {
              setSeatingCapacity(event.target.value);
            }}
          >
            <option value="2">2</option>
            <option value="2">4</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </Input>
        </FormGroup>

        {/* car fuel*/}
        <FormGroup>
          <Label for="exampleYear">
            <b>Loại nhiên liệu</b>
          </Label>
          <Input
            id="carFuel"
            name="carFuel"
            placeholder="Chọn loại nhiên liệu"
            type="select"
            value={carFuel}
            onChange={(event) => {
              setCarFuel(event.target.value);
            }}
          >
            <option value="Xăng">Xăng</option>
            <option value="Dầu">Dầu</option>
            <option value="Điện">Điện</option>
            <option value="Hybrid">Hybrid</option>
          </Input>
        </FormGroup>

        {/* Country*/}
        <FormGroup>
          <Label for="exampleYear">
            <b>Xuất xứ</b>
          </Label>
          <Input
            id="country"
            name="country"
            type="select"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          >
            <option value="Đức">Đức</option>
            <option value="Hàn Quốc">Hàn Quốc</option>
            <option value="Nhật">Nhật</option>
            <option value="Trung Quốc">Trung Quốc</option>
            <option value="Mỹ">Mỹ</option>
            <option value="Việt Nam">Việt Nam</option>
          </Input>
        </FormGroup>

        {/* Transmission*/}
        <FormGroup>
          <Label for="exampleYear">
            <b>Loại hộp số</b>
          </Label>
          <Input
            id="transmission"
            name="transmission"
            type="select"
            value={transmission}
            onChange={(event) => {
              setTransmission(event.target.value);
            }}
          >
            <option value="Số tự động">Số tự động</option>
            <option value="Số sàn">Số sàn</option>
          </Input>
        </FormGroup>

        {/* status*/}
        <FormGroup>
          <Label for="exampleYear">
            <b>Trạng thái</b>
          </Label>
          <Input
            id="status"
            name="status"
            type="select"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value="Còn hàng">Còn hàng</option>
            <option value="Hết hàng">Hết hàng</option>
          </Input>
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
            {/* {items} */}
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Mui trần">Mui trần</option>
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
