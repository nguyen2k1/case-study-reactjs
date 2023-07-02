import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Liên hệ 24/7</h5>
            <p>0363045052</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Bắc Từ Liêm</h5>
            <p> Hà Nội</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Fax</h5>
            <p>03xxxxxxxx</p>
          </div>
        </div> 
      </div>
      <div className="col-12 col-md-12 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-user"></i>
            </div>
            <h5>Người thực hiện </h5>
            <p>Vũ Đức Nguyên</p>
            <p>VVVVVVVVV</p>
          </div>
        </div>
    </div>
  );
};

export default ContactInfo;
