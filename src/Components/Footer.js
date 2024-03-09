import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="row">
          {/* <!-- left --> */}
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* <!-- title --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3>BMW THẠCH THẤT</h3>
              </div>
            </div>
            {/* <!-- content --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>
                  Website bán và giới thiệu sản phẩm chính thức của BMW Việt
                  Nam. Tại đây, khách hàng sẽ được cung cấp đầy đủ các thông tin
                  và bảng giá về các mẫu xe hơi mới nhất của BMW. Hơn thế nữa,
                  chúng tôi cung cấp những dịch vụ chất lượng hàng đầu, phục vụ
                  khách hàng tốt nhất trong việc mua xe BMW.
                </p>
              </div>
            </div>
            {/* <!-- phone number --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Điện thoại : 092.246.8888</p>
              </div>
            </div>
            {/* <!-- address --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Địa chỉ : Thái Bình, Bình Yên, Thạch Thất, Hà Nội</p>
              </div>
            </div>
            {/* <!-- email --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Email : datnv@gmail.com</p>
              </div>
            </div>
          </div>

          {/* <!-- main --> */}
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* <!-- title --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3>ĐƯỜNG ĐI ĐẾN BMW THẠCH THẤT</h3>
              </div>
            </div>
            {/* <!-- image --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* <img src="../Asset/maps.JPG" alt="" /> */}
                <img
                  style={{ width: "350px", height: "180px" }}
                  src="https://vatvostudio.vn/wp-content/uploads/2022/09/Google-Maps-Traffic2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <!-- rigth --> */}
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* <!-- title --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3>CÁC MẪU XE TẠI BMW THẠCH THẤT</h3>
              </div>
            </div>
            {/* <!-- content 1 --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>BMW X1, BMW X3, BMW X4, BMW X5, BMW X6, BMW X7</p>
              </div>
            </div>
            {/* <!-- content 2 --> */}
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Z4 Series, 7 Series, 5 Series, 4 Series, 3 Series</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
