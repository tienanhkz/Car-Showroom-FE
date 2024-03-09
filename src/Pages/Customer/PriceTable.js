import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getListCarAPI } from "../../API/CarAPI";
import { useSelector, useDispatch } from "react-redux";
import { actionFetchListCarsAPI_MDW } from "../../Redux/Reducer/CarSliceReducer";

function PriceTable() {
  //
  // let stateRedux = useSelector((state) => state);
  // let listCar = selectListCar(stateRedux);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  let { listCar, totalPages } = useSelector((state) => state.carReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchListCarsAPI_MDW({ page, size }));
  }, [page, size]);

  let items = "";
  items = listCar.map((car, index) => {
    return (
      <tr>
        <th scope="row">{car.id}</th>
        <td>{car.name}</td>
        <td>{car.price} VNĐ</td>
        <td>{car.yearOfManufacturer}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="priceTableContainer">
        {/* header */}
        <div class="row rowHeader">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <b style={{ color: "red" }}>
              Bảng giá xe BMW tại Showroom BMW Thạch Thất
            </b>
            <p style={{ color: "gray" }}>ƯU ĐÃI CỰC HẤP DẪN</p>
          </div>
        </div>
        {/* price table */}

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* table */}
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Stt</th>
                  <th scope="col">Phiên bản</th>
                  <th scope="col">Giá bán</th>
                  <th scope="col">Năm sản xuất</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </div>
        </div>
        {/* paging */}
        <div style={{ marginLeft: "750px", width: "900px" }}>
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

      {/* <Footer /> */}
    </>
  );
}

export default PriceTable;
