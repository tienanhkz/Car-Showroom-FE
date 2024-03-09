import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteCustomerTestDrivingAPI,
  actionGetListCustomerTestDrivingAPI,
} from "./../../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";
import { showCreateCustomerTestForm } from "../../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer";
import ModalCreateCustomerTestDriving from "./../../Components/CustomerTestDriving/CreateCustomer/ModalCreateCustomerTestDriving";
import ModalUpdateCustomerTestDriving from "./../../Components/CustomerTestDriving/UpdateCustomer/ModalUpdateCustomerTestDriving";
import { showUpdateCustomerTestDrivingForm } from "../../Redux/Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer";
import ReactPaginate from "react-paginate";

function CustomerAdminPage() {
  let dispatch = useDispatch();

  let { listCustomer, totalPages } = useSelector(
    (state) => state.customerTestDriving
  );

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(actionGetListCustomerTestDrivingAPI({ page, size }));
  }, [page, size]);

  let onHandleDelete = (id_delete) => {
    dispatch(actionDeleteCustomerTestDrivingAPI(id_delete));
    alert("Delete successfully !");
    //dispatch(actionGetListCustomerTestDrivingAPI());
  };

  let handleSearch = () => {
    dispatch(actionGetListCustomerTestDrivingAPI({ page, size, search }));
  };

  let items = "";
  items = listCustomer.map((customer, index) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{customer.fullName}</td>
        <td>{customer.carName}</td>
        <td>{customer.dateTestDriving}</td>
        <td>{customer.phoneNumber}</td>
        <td>
          <button
            onClick={() =>
              dispatch(showUpdateCustomerTestDrivingForm(customer))
            }
            type="button"
            class="btn btn-primary"
          >
            Sửa
          </button>
        </td>
        <td>
          <button
            onClick={() => onHandleDelete(customer.id)}
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
    <>
      <div className="container">
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
        <div
          class="row"
          style={{
            // border: "1px solid rgb(206, 201, 201)",
            padding: "12px 6px",
          }}
        >
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-default">
              <div class="panel-body">
                <h3>
                  <b style={{ color: "green" }}>
                    DANH SÁCH KHÁCH HÀNG ĐĂNG KÝ LÁI THỬ
                  </b>
                </h3>
                {/* <!-- button --> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => dispatch(showCreateCustomerTestForm())}
                >
                  Thêm mới
                </button>
                {/* <!-- table display list product --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Stt</th>
                      <th>Họ và tên</th>
                      <th>Loại xe</th>
                      <th>Ngày lái thử</th>
                      <th>Số điện thoại</th>
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
      </div>

      <ModalCreateCustomerTestDriving />
      <ModalUpdateCustomerTestDriving />
    </>
  );
}

export default CustomerAdminPage;
