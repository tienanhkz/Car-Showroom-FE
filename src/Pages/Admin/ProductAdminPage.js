import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchListCarsAPI_MDW } from "../../Redux/Reducer/CarSliceReducer";
import { showCreateForm } from "../../Redux/Reducer/CreateNewFormReducer";
import ModalCreateNewCar from "../../Components/Car/CreateCar/ModalCreateNewCar";
import { showUpdateForm } from "../../Redux/Reducer/CreateUpdateFormReducer";
import ModalUpdateCar from "./../../Components/Car/UpdateCar/ModalUpdateCar";
import { actionDeleteCarAPI } from "./../../Redux/Reducer/CarSliceReducer";
import ReactPaginate from "react-paginate";

function ProductAdminPage() {
  // dispath action
  let dispathRedux = useDispatch();

  let { listCar, totalPages } = useSelector((state) => state.carReducer);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispathRedux(actionFetchListCarsAPI_MDW({ page, size }));
  }, [page, size]);

  //
  let onHandleDeleteCar = (id_Delete) => {
    dispathRedux(actionDeleteCarAPI(id_Delete));
    // alert
    alert("Delete successfully !");
    // dispathRedux(closeForm())
  };

  let handleSearch = () => {
    dispathRedux(actionFetchListCarsAPI_MDW({ page, size, search }));
  };

  //
  let onHandleUpdateButton = (car_Update) => {
    dispathRedux(showUpdateForm(car_Update));
  };

  let items = "";
  items = listCar.map((car, index) => {
    let imagePath = `../Asset/${car.image}`;

    return (
      <tr>
        <td>{index}</td>
        <td>{car.name}</td>
        <td>{car.price}</td>
        {/* <td>{car.information}</td> */}
        {/* <td>{car.detail}</td> */}
        <td>
          <img
            src={imagePath}
            style={{ width: "60px", height: "60px" }}
            alt=""
          />
        </td>
        <td>{car.yearOfManufacturer}</td>
        <td>{car.carCategoryName}</td>
        <td>
          <button
            //
            onClick={() => onHandleUpdateButton(car)}
            type="button"
            class="btn btn-primary"
          >
            Sửa
          </button>
        </td>
        <td>
          <button
            onClick={() => onHandleDeleteCar(car.id)}
            type="button"
            class="btn btn-danger"
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      {/* Search */}
      <div class="row" style={{ marginBottom: "16px" }}>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {/* <h3><b style={{color: "green"}}>Xin chào ADMIN</b></h3> */}
        </div>
      </div>
      {/* Search */}
      <div
        class="row"
        style={{
          border: "1px solid rgb(206, 201, 201)",
          padding: "12px 6px",
          marginBottom: "16px",
        }}
      >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body" style={{ display: "flex" }}>
              {/* <!-- input to search --> */}
              <div
                class="col-xs-8 col-sm-8 col-md-8 col-lg-8"
                style={{ margin: "0 10px" }}
              >
                <input
                  type="text"
                  id="inputSearch"
                  class="form-control"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
              {/* <!-- search button --> */}
              <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleSearch()}
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div class="row" style={{ padding: "12px 6px" }}>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>
                <b style={{ color: "green" }}>DANH SÁCH SẢN PHẨM</b>
              </h3>
              {/* <!-- button --> */}
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                  dispathRedux(showCreateForm());
                }}
              >
                Thêm mới
              </button>
              {/* <!-- table display list product --> */}
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    {/* <th>Information</th> */}
                    {/* <th>Detail</th> */}
                    <th>Ảnh</th>
                    <th>Năm sản xuất</th>
                    <th>Loại xe</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody id="tbProductTable">{items}</tbody>
              </table>

              {/* paging */}
              <div style={{ marginLeft: "520px", width: "900px" }}>
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={(selectedItem) => {
                    setPage(selectedItem.selected);
                  }}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={totalPages} // totalPages
                  forcePage={page}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalCreateNewCar />
      <ModalUpdateCar />
    </div>
  );
}

export default ProductAdminPage;
