import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchListNewsAPI_MDW } from "./../../Redux/Reducer/News/NewsSliceReducer";
import ReactPaginate from "react-paginate";

function News() {
  let dispatch = useDispatch();

  let [page, setPage] = useState(0);
  let [size, setSize] = useState(3);

  let { listNews, totalPages } = useSelector((state) => state.NewsSliceReducer);

  useEffect(() => {
    dispatch(actionFetchListNewsAPI_MDW({ page, size }));
  }, [page, size]);

  let items = "";
  items = listNews.map((news) => {
    let imagePath = `../Asset/${news.image}`;
    let title = news.title;
    let description = news.description;
    // let date = news.dateNews;

    return (
      <div
        class="row"
        //   style="margin-top: 12px;"
        style={{ marginTop: "12px" }}
      >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            {/* <!-- news1 --> */}
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              {/* <!-- image --> */}
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <a href="#">
                    <img
                      src={imagePath}
                      style={{ width: "100%", height: "200px" }}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* <!-- title --> */}
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3>
                    <a href="https://vnexpress.net/oto-xe-may/v-car/dong-xe/bmw-x3-27">
                      {title}
                    </a>
                  </h3>
                </div>
              </div>
              {/* <!-- content --> */}
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p>
                    <a href="https://vnexpress.net/oto-xe-may/v-car/dong-xe/bmw-x3-27">
                      {description}[...]
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="news">
        {/* <!-- title --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h3
              //   style="text-align: center; color: #555555; font-weight: bold;"
              style={{
                textAlign: "center",
                color: "#555555",
                fontWeight: "bold",
              }}
            >
              TIN TỨC
            </h3>
          </div>
        </div>
        {/* <!-- orange bar --> */}
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
            // style="text-align: center;"
            style={{ textAlign: "center" }}
          >
            <img
              style={{ width: "154px", height: "6px" }}
              src="https://ceid.utsa.edu/yfhuang/wp-content/uploads/sites/42/2017/07/utsa-orange-bar.jpg"
              alt=""
            />
          </div>
        </div>
        {/* <!-- list news --> */}

        <div style={{ display: "flex" }} className="newsItem">
          {items}
        </div>
        {/* paging */}
        <div style={{ marginLeft: "800px" }}>
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

        {/* <!-- end news --> */}
      </div>
    </>
  );
}

export default News;
