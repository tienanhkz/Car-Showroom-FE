import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCreateNewNews from "../../Components/News/AddNews/ModalCreateNewNews";
import { showCreateNewsForm } from "../../Redux/Reducer/News/CreateNewNewsFormReducer";
import ModalUpdateNews from "../../Components/News/UpdateNews/ModalUpdateNews";
import { showUpdateNewsForm } from "../../Redux/Reducer/News/CreateUpdateNewsFormReducer";
import { actionFetchListNewsAPI_MDW } from "../../Redux/Reducer/News/NewsSliceReducer";
import ReactPaginate from "react-paginate";
import { actionDeleteNewsAPI } from "./../../Redux/Reducer/News/NewsSliceReducer";

function Posts() {
  let dispatch = useDispatch();

  let [page, setPage] = useState(0);
  let [size, setSize] = useState(3);

  let { listNews, totalPages } = useSelector((state) => state.NewsSliceReducer);

  useEffect(() => {
    dispatch(actionFetchListNewsAPI_MDW({ page, size }));
  }, [page, size]);

  let items = "";

  items = listNews.map((news) => {
    return (
      <>
        <tr>
          <td>{news.id}</td>
          <td>{news.title}</td>
          <td>{news.description}</td>
          <td>{news.image}</td>
          <td>{news.dateNews}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => dispatch(showUpdateNewsForm(news))}
            >
              Sửa
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => dispatch(actionDeleteNewsAPI(news.id))}
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
                    value=""
                  />
                </div>
                {/* <!-- search button --> */}
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="handleToSearch()"
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
                  <b style={{ color: "green" }}>TIN TỨC</b>
                </h3>
                {/* <!-- button --> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => dispatch(showCreateNewsForm())}
                >
                  Thêm mới
                </button>
                {/* <!-- table display list product --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Tiêu đề</th>
                      <th>Mô tả</th>
                      <th>Image</th>
                      <th>Ngày đăng</th>
                      <th>Chỉnh sửa</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody id="tbProductTable">{items}</tbody>
                </table>
                {/* paging */}
                {/* paging */}
                <div style={{ marginLeft: "570px", width: "500px" }}>
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

      <ModalCreateNewNews />
      <ModalUpdateNews />
    </>
  );
}

export default Posts;
