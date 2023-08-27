import React from "react";
import { Link } from "react-router-dom";
import categories from "resources/the-loai/the-loai.json";

type masterLayoutProps = {
  children: React.ReactNode; // 👈️ define children prop
};

export const MasterLayout = (props: masterLayoutProps) => {
  const scrollTop = () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  };

  return (
    <>
      {/* Header Section Begin */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <Link to={"/"}>
                  <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="header__nav">
                <nav className="header__menu mobile-menu">
                  <div className="navbar-collapse">
                    <ul>
                      <li className="active">
                        <Link to={""}>Trang chủ</Link>
                      </li>
                      <li>
                        <Link to={"/the-loai/phat"}>
                          Thể loại
                          <span className="arrow_carrot-down"></span>
                        </Link>
                        <ul className="dropdown">
                          {categories.map((value, key) => (
                            <li key={key}>
                              <Link to={value.link}>{value.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link to={"/chuyen-doi/tranh"}>Chuyển đổi tranh</Link>
                      </li>
                      <li>
                        <Link to={"/chuyen-doi/the-loai"}>
                          Chuyển đổi thể loại
                        </Link>
                      </li>
                      <li>
                        <Link to={"/lien-he"}>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header__right">
                <Link to={"/chuyen-doi/the-loai"} className="search-switch">
                  <span className="icon_search"></span>
                </Link>
                <a href="./login.html">
                  <span className="icon_profile"></span>
                </a>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
      {/* Header End */}

      <div>{props.children}</div>

      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="page-up">
          <div onClick={scrollTop}>
            <span className="arrow_carrot-up"></span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <a href="./index.html">
                  <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active">
                    <Link to={"/"}>Trang chủ</Link>
                  </li>
                  {/* <li>
                    <a href="./categories.html">Thể loại</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>
                &copy; 2023 - Bản quyền của tranh số hóa Kami{" "}
                <i className="fa fa-heart" aria-hidden="true"></i>
                <script>document.write(new Date().getFullYear()); </script>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}

      {/* Search model Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close"></i>
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search model end */}
    </>
  );
};
