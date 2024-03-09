import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateNewsForm } from "../../../Redux/Reducer/News/CreateNewNewsFormReducer";
import { actionAddNewsAPI } from "../../../Redux/Reducer/News/NewsSliceReducer";
//import { actionAddCarAPI } from "../../../Redux/Reducer/CarSliceReducer";
//import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";
// import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";
// import { actionAddCarAPI } from "../../../Redux/Reducer/CarSliceReducer";
import { actionFetchListNewsAPI_MDW } from "./../../../Redux/Reducer/News/NewsSliceReducer";

function InputForm() {
  //
  let dispatch = useDispatch();
  //
  // const listCarCategory = useSelector(
  //   (state) => state.carCategorySlice.listCarCategory
  // );

  // declare States to save data in Input TextField
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [imagePath, setImagePath] = useState("");

  // function to get image link
  function getImageName(imageLink) {
    // transfer path to array
    var itemArray = imageLink.split("\\");
    // get last element
    var imageName = itemArray[itemArray.length - 1];
    return imageName;
  }

  // add new function
  let handleCreateButton = () => {
    let News_new = {
      title: title,
      description: description,
      image: getImageName(imagePath),
    };
    dispatch(actionAddNewsAPI(News_new));
    console.log("News_new : ", News_new);
    alert("Add successfully !");
    // dispatch(actionFetchListNewsAPI_MDW());
    dispatch(closeCreateNewsForm());
  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tiêu đề</b>
          </Label>
          <textarea
            style={{ width: "100%", height: "80px" }}
            id="Title"
            name="Title"
            type="textArea"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
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
