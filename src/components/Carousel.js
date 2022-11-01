import React from 'react'

export default function Carousel() {
  return (
    <div className="container-fluid">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="assets/images/slide1.jpg" alt="Los Angeles" className="d-flex justify-content-center w-30"/>
          <div class="carousel-caption">
            <h3>Tôi thấy hoa vàng trên cỏ xanh</h3>
          </div>          
        </div>
        <div className="carousel-item">
          <img src="assets/images/slide2.jpg" alt="Chicago" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Em Là Bà Nội Của Anh</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Em Chưa 18</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Ngày Mai Mai Cưới</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Cô Ba Sài Gòn</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Mẹ Chồng</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Nắng</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Tháng Năm Rực Rỡ</h3>
          </div>  
        </div>
        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100"/>
          <div class="carousel-caption">
            <h3>Tèo em</h3>
          </div>  
        </div>        
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
      </div>      
    </div>
  )
}
