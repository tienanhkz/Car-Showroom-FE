import React from "react";

function Reason() {
  return (
    <div class="reason">
      {/* <!-- title --> */}
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 
        //   style="text-align: center; color: #555555; font-weight: bold;"
          style={{textAlign: 'center', color: '#555555', fontWeight: 'bold'}}
          >
            VÌ SAO NÊN MUA XE TẠI BMW THẠCH THẤT
          </h3>
        </div>
      </div>
      {/* <!-- orange bar --> */}
      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        //   style="text-align: center;"
        style={{textAlign: 'center'}}
        >
          {/* <img src="../Asset/bar.JPG" alt="" /> */}
          <img 
          style={{width: '154px', height: '6px'}}
          src="https://ceid.utsa.edu/yfhuang/wp-content/uploads/sites/42/2017/07/utsa-orange-bar.jpg" 
          alt="" />
        </div>
      </div>
      {/* <!-- lines  --> */}
      <div class="row" 
    //   style="margin-top: 20px; font-size: 14px;"
      style={{marginTop: '20px', fontSize: '14px'}}
      >
        {/* <!-- left --> */}
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        {/* <!-- main --> */}
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <p>
            BMW Thạch Thất được đầu tư theo tiêu chuẩn 4S của tập đoàn BMW trên
            toàn cầu, bao gồm:
          </p>{" "}
          <br />
          <p>
            (1) Sales – Phòng trưng bày xe lên đến 12 xe BMW với các dòng sản
            phẩm đặc trưng;
          </p>{" "}
          <br />
          <p>
            (2) Service – Xưởng dịch vụ hiện đại với 20 khu vực sửa chữa xe cùng
            lúc;
          </p>{" "}
          <br />
          <p>
            (3) Spare part – Phòng phụ tùng và trang thiết bị xe BMW có sẵn để
            đáp ứng nhu cầu thay thế của khách hàng.
          </p>{" "}
          <br />
          <p>
            (4) Integrated Service Information Server ISIS – Hệ thống kết nối
            mạng toàn cầu giữa BMW Miền Bắc và các kỹ sư BMW tại Đức.
          </p>{" "}
          <br />
        </div>
        {/* <!-- right --> */}
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
      </div>

      {/* <!-- information main --> */}
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            {/* <!-- left --> */}
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* <!-- title --> */}
              <h3>
                <i class="fa fa-wrench fa-2x"></i>
                BẢO DƯỠNG
              </h3>
              {/* <!-- content --> */}
              <p>
                Trong quá trình vận hành, nhiều chi tiết trên xe bị mài mòn hoặc
                hư hỏng theo thời gian sử dụng là điều không thể tránh khỏi đối
                với bất kỳ loại máy móc nào. Việc bảo dưỡng định kỳ sẽ đảm bảo
                từng chi tiết cấu thành nói riêng và tổng thể chiếc xe nói chung
                luôn được vận hành tốt
              </p>
            </div>
            {/* <!-- main --> */}
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* <!-- title --> */}
              <h3>
                <i class="fa fa-book fa-2x"></i>
                BẢO HÀNH
              </h3>
              {/* <!-- content --> */}
              <p>
                Chế độ bảo hành bắt đầu được tính ngay kể từ thời điểm xe mới
                được giao. Trong thời hạn xe bạn được bảo hành, chúng tôi đảm
                bảo sẽ sửa chữa hoặc thay thế bất kỳ phụ tùng nào cho xe mới
                hoàn toàn miễn phí, nếu xe được sử dụng trong điều kiện hoạt
                động bình thường trước đó.
              </p>
            </div>
            {/* <!-- right --> */}
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* <!-- title Shield --> */}
              <h3>
                <i class="fa fa-shield fa-2x"></i>
                TÀI CHÍNH BẢO HIỂM
              </h3>
              {/* <!-- content --> */}
              <p>
                Chúng tôi hợp tác với các ngân hàng và đơn vị tài chính lớn,
                cũng như các đơn vị bảo hiểm ô tô uy tín trong và ngoài nước,
                nhằm mang đến cho bạn một trải nghiệm nhẹ nhàng, thoải mái, đồng
                thời cũng mang lại nhiều lựa chọn hơn, giúp bạn quyết định một
                cách tiết kiệm và chính xác.
              </p>
            </div>
          </div>
        </div>

        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
      </div>
    </div>
  );
}

export default Reason;
