import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { actionUpdateCarAPI } from '../../../Redux/Reducer/CarSliceReducer';
import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";
import { actionUpdateCarAPI } from "../../../Redux/Reducer/CarSliceReducer";
import { actionUpdateNewsAPI } from "../../../Redux/Reducer/News/NewsSliceReducer";
import { closeUpdateNewsForm } from "../../../Redux/Reducer/News/CreateUpdateNewsFormReducer";

function InputUpdateForm(props) {
  let { news_Update } = props;

  // declare States to save data in Input TextField
  let [title, setTitle] = useState(news_Update.title);
  let [description, setDescription] = useState(news_Update.description);
  let [imagePath, setImagePath] = useState(news_Update.image);

  // function to get image link
  function getImageName(imageLink) {
    // transfer path to array
    var itemArray = imageLink.split("\\");
    // get last element
    var imageName = itemArray[itemArray.length - 1];
    return imageName;
  }

  let dispatch = useDispatch();

  let handleUpdateButton = () => {
    let News_update = {
      id: news_Update.id,
      title: title,
      description: description,
      image: getImageName(imagePath),
    };
    dispatch(actionUpdateNewsAPI(News_update));
    //console.log("News_update : ", News_update);
    dispatch(closeUpdateNewsForm());
  };

  return (
    <>
      <Form>
        {/* Name */}
        <FormGroup>
          <Label for="exampleName">
            <b>Title</b>
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
            onChange={(event) => {
              setImagePath(event.target.value);
            }}
          ></Input>
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
