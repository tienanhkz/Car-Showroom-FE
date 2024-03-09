import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { actionUpdateCarAPI } from '../../../Redux/Reducer/CarSliceReducer';
import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";
import { actionUpdateCarAPI } from "../../../Redux/Reducer/CarSliceReducer";

function InputUpdateForm(props) {
  let { car_Update } = props;
  console.log("car_Update props : ", car_Update);

  let [fullName, setFullName] = useState(car_Update.name);
  let [price, setPrice] = useState(car_Update.price);
  let [description, setDescription] = useState(car_Update.information);
  let [descripDetail, setDescripDetail] = useState(
    car_Update.detailInformation
  );
  let [imagePath, setImagePath] = useState("");
  let [year, setYear] = useState(car_Update.yearOfManufacturer);

  let [seatingCapacity, setSeatingCapacity] = useState(
    car_Update.seatingCapacity
  );
  let [carFuel, setCarFuel] = useState(car_Update.carFuel);
  let [country, setCountry] = useState(car_Update.placeOfManufacture);
  let [transmission, setTransmission] = useState(car_Update.transmission);
  let [status, setStatus] = useState(car_Update.status);

  let [carType, setCarType] = useState(car_Update.carCategoryName);

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

  let dispatch = useDispatch();

  let handleUpdateButton = () => {
    let carUpdate = {
      id: car_Update.id,
      name: fullName,
      image: getImageName(imagePath),
      price: price,
      information: description,
      detailInformation: descripDetail,
      yearOfManufacturer: year,
      seatingCapacity: seatingCapacity,
      carFuel: carFuel,
      placeOfManufacture: country,
      transmission: transmission,
      status: status,
      createAt: currentDate,
      carCategoryName: carType,
    };
    dispatch(actionUpdateCarAPI(carUpdate));
    dispatch(closeUpdateForm());
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
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
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
            type="text"
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
            type="textArea"
            value={descripDetail}
            onChange={(event) => {
              setDescripDetail(event.target.value);
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
            <b>Chọn loại xe</b>{" "}
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
