import "./index.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  const init = () => {
    setTimeout(() => {
      $(".loader").fadeOut();
      $("#preloder").delay(100).fadeOut("slow");
    }, 100);
  };
  init();
  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader"></div>
      </div>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to={"/"}>
                  <i className="fa fa-home"></i> Trang chủ
                </Link>
                <span>Liên hệ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Blog Details Section Begin */}
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__item__text text-white">
                  <h2 className="text-center">Tranh số hóa Kami</h2>
                  <p>
                    <strong>Địa chỉ:</strong>
                    B2-8 KQH Xuân Phú, phường Xuân Phú, TP.Huế
                  </p>
                  <p>
                    <strong>Giao hàng:</strong> Toàn quốc
                  </p>
                  <p>
                    <strong>Điện thoại:</strong> 0328.272.178
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog__details__title">
                <div className="blog__details__social">
                  <Link
                    target="blank"
                    to={
                      "https://www.facebook.com/people/TRANH-S%E1%BB%90-H%C3%93A-KAMI/100063945228061/"
                    }
                    className="facebook"
                  >
                    <i className="fa fa-facebook-square"></i>Facebook
                  </Link>
                  <Link
                    target="blank"
                    to={"https://shopee.vn/nha_kami"}
                    className="pinterest"
                  >
                    <i className="fa fa-pinterest"></i>Shoppe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}
    </>
  );
};
