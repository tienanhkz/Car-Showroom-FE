import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionFetchListCarsAPI_MDW } from "../Redux/Reducer/CarSliceReducer";
import ReactPaginate from "react-paginate";

function ListCar(props) {
  const dispatch = useDispatch();
  let { listCar, totalPages } = useSelector((state) => state.carReducer);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  useEffect(() => {
    dispatch(actionFetchListCarsAPI_MDW({ page, size }));
  }, [page, size]);

  let items = "";
  items = listCar.map((car) => {
    let imagePath = `Asset/${car.image}`;
    let carDetailPath = `/homePage/carDetail/${car.id}`;
    return (
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 carItem hasHover">
        {/* <!-- image --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to={carDetailPath}>
              <img
                src={imagePath}
                style={{ width: "240px", height: "243px" }}
                alt=""
              />
            </Link>
          </div>
        </div>
        {/* <!-- name --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p
              // style="text-align: center; margin-top: 8px;"
              style={{ textAlign: "center", marginTop: "8px" }}
            >
              {car.name}
            </p>
          </div>
        </div>
        {/* <!-- price --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p
              // style="font-weight: bold; text-align: center;"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              {car.price} VND
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div class="row listCars" id="listCarsHome">
        {/* <!-- list product  --> */}
        {items}
        {/* paging */}
        <div style={{ marginLeft: "880px" }}>
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
    </>
  );
}

export default ListCar;
