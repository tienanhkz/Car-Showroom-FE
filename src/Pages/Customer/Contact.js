import React from "react";

function Contact() {
  return (
    <>
      <div className="contactContainer">
        {/* <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <img
              style={{ width: "100%", height: "510px" }}
              src="https://bmwlongbien.com/wp-content/uploads/2020/03/BMW-Long-Bi%C3%AAn.png"
            />
          </div>
        </div> */}
        
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 rowheaderContact">
            <h1 style={{fontWeight: 'bold'}}>THÔNG TIN LIÊN HỆ</h1>
          </div>
        </div>
        

        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <b>SHOWROOM BMW THẠCH THẤT</b>
            <p>Địa chỉ : Thái Bình, Bình Yên, Thạch Thất, Hà Nội</p>
            <p>
              Phụ trách Kinh doanh: Mr. <b>Đạt</b> – Hotline <b>092.246.7899</b>
            </p>
            <p>
              Zalo: <b>092.246.7899</b>
            </p>
            <p>Email: datnvhe130026@thaco.com.vn</p>
            <p>Fanpage: BMW Chính hãng tại Hà Nội – 092 246 7899</p>
            <p>Facebook: https://www.facebook.com/phongbmw</p>
            <p>Giờ hoạt động:</p>
            <b>Thứ 2 – Thứ 6 : 08:00 – 18:00.</b> <br />
            <b>Thứ 7 – Chủ Nhật : 08:00 – 17:00.</b>
          </div>

          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <img
              style={{ width: "100%", height: "510px" }}
              src="https://bmwlongbien.com/wp-content/uploads/2020/03/BMW-Long-Bi%C3%AAn.png"
            />
          </div>
        </div>
      </div>

     
    </>
  );
}

export default Contact;
