import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCreateNewAccount from "../../Components/Account/CreateAccount/ModalCreateNewAccount";
import { showCreateAccountForm } from "../../Redux/Reducer/Account/CreateNewAccountFormReducer";
import ModalUpdateAccount from "./../../Components/Account/UpdateAccount/ModalUpdateAccount";
import { showUpdateAccountForm } from "../../Redux/Reducer/Account/CreateUpdateAccountFormReducer";
import {
  actionDeleteAccountAPI,
  actionGetListAccountsAPI,
} from "../../Redux/Reducer/Account/accountSliceReducer";
import ReactPaginate from "react-paginate";
import { deleteAccountsAPI } from "../../API/Account/AccountsAPI";

function Accounts() {
  let dispatch = useDispatch();

  let { listAccounts, totalPages } = useSelector(
    (state) => state.accountSliceReducer
  );
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(actionGetListAccountsAPI({ page, size }));
  }, [page, size]);

  let handleSearch = () => {
    dispatch(actionGetListAccountsAPI({ page, size, search }));
  };

  let items = "";
  items = listAccounts.map((account, index) => {
    return (
      <>
        <tr>
          <td>{index}</td>
          <td>{account.username}</td>
          <td>
            {account.firstName} {account.lastName}
          </td>
          <td>{account.role}</td>
          <td>{account.createAt}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => dispatch(showUpdateAccountForm(account))}
            >
              Sửa
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => dispatch(actionDeleteAccountAPI(account.id))}
            >
              Xóa
            </button>
          </td>
        </tr>
      </>
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
                  <b style={{ color: "green" }}>Tài khoản</b>
                </h3>
                {/* <!-- button --> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => dispatch(showCreateAccountForm())}
                >
                  Thêm mới
                </button>
                {/* <!-- table display list product --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Tên đăng nhập</th>
                      <th>Tên</th>
                      <th>Quyền</th>
                      <th>Ngày tạo</th>
                      <th>Chỉnh sửa</th>
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

      <ModalCreateNewAccount />
      <ModalUpdateAccount />
    </>
  );
}

export default Accounts;
