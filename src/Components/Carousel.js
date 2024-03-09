import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner" style={{ marginTop: "-70px" }}>
          <div class="carousel-item active">
            {/* <img src="../Asset/carosel2.jpg" class="d-block w-100" alt="..." /> */}
            <img
              src="https://giaxebmw-vn.com/wp-content/uploads/2023/01/bn3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            {/* <img src="../Asset/carosel3.jpg" class="d-block w-100" alt="..." /> */}
            <img
              src="https://giaxebmw-vn.com/wp-content/uploads/2023/01/bn5.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            {/* <img src="../Asset/carosel4.jpg" class="d-block w-100" alt="..." /> */}
            <img
              src="https://giaxebmw-vn.com/wp-content/uploads/2023/02/banner-430i-1400x672.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
