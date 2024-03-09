import React from 'react'

function News() {
  return (
    // <div className='newContainer' >
      <div className='news'>
        {/* <!-- title --> */}
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h3 
    //   style="text-align: center; color: #555555; font-weight: bold;"
      style={{textAlign: 'center', color: '#555555', fontWeight: 'bold'}}
      >TIN TỨC</h3>
    </div>
  </div>
  {/* <!-- orange bar --> */}
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" 
    // style="text-align: center;"
    style={{textAlign: 'center'}}
    >
     <img 
          style={{width: '154px', height: '6px'}}
          src="https://ceid.utsa.edu/yfhuang/wp-content/uploads/sites/42/2017/07/utsa-orange-bar.jpg" 
          alt="" />
    </div>
  </div>
  {/* <!-- list news --> */}
  <div class="row" 
//   style="margin-top: 12px;"
  style={{marginTop: '12px'}}
  >
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

      <div class="row">
        {/* <!-- news1 --> */}
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* <!-- image --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a href="#">
                <img src="https://giaxebmw-vn.com/wp-content/uploads/2023/02/p90458221-the-new-bmw-760i-xdrive-european-model-shown-600x400.jpg" 
                // style="width: 100%; height: 200px;" 
                style={{width: '100%', height: '200px'}}
                alt=""/></a>
            </div>
          </div>
          {/* <!-- title --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3><a href="https://vnexpress.net/oto-xe-may/v-car/dong-xe/bmw-x3-27">BMW 7-SERIES 2023 RA MẮT VỚI MÀN HÌNH SIÊU RỘNG 31 INCH DÀNH CHO HÀNG GHẾ SAU</a></h3>
            </div>
          </div>
          {/* <!-- content --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p><a href="https://vnexpress.net/oto-xe-may/v-car/dong-xe/bmw-x3-27">BMW đã chính thức ra mắt thế hệ thứ 7 hoàn toàn mới của mẫu[...]</a></p>
            </div>
          </div>
        </div>

        {/* <!-- news2 --> */}
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* <!-- image --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a href="#"><img src="https://giaxebmw-vn.com/wp-content/uploads/2023/01/p6.jpg" 
            //   style="width: 100%; height: 200px;" 
              style={{width: '100%', height: '200px'}}
              alt=""/></a>
            </div>
          </div>
          {/* <!-- title --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3><a href="https://vnexpress.net/oto-xe-may/v-car/dong-xe/bmw-x3-27">BMW X3 lắp ráp tại Việt Nam có gì cạnh tranh với Mercedes GLC?</a></h3>
            </div>
          </div>
          {/* <!-- content --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p><a href="#">Chuyển sang lắp ráp trong nước, BMW X3 gây chú ý với giá bán thấp[...]</a></p>
            </div>
          </div>
        </div>

        {/* <!-- news3 --> */}
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* <!-- image --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <img src="https://giaxebmw-vn.com/wp-content/uploads/2023/01/p5.jpeg" 
            //   style="width: 100%; height: 200px;" 
              style={{width: '100%', height: '200px'}}
              alt=""/>
            </div>
          </div>
          {/* <!-- title --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3><a href="#">Vượt Mercedes, BMW trở thành thương hiệu ô tô hạng sang bán chạy nhất năm 2022</a></h3>
            </div>
          </div>
          {/* <!-- content --> */}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p><a href="#">BMW đã chính thức ra mắt thế hệ thứ 7 hoàn toàn mới của mẫu[...]</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- end news --> */}
    </div>
    // </div>
    
  )
}

export default News