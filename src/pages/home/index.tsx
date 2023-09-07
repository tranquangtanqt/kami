import chua from "resources/tranh/chua.json";
import cungHoangDao from "resources/tranh/cung-hoang-dao.json";
import dongVat from "resources/tranh/dong-vat.json";
import hoa from "resources/tranh/hoa.json";
import hoaSen from "resources/tranh/hoa-sen.json";
import hoatHinh from "resources/tranh/hoat-hinh.json";
import meVaBe from "resources/tranh/me-va-be.json";
import nangTho from "resources/tranh/nang-tho.json";
import phat from "resources/tranh/phat.json";
import phongCanh from "resources/tranh/phong-canh.json";
import tinhYeu from "resources/tranh/tinh-yeu.json";
import bep from "resources/tranh/bep.json";
import "./index.css";
import categories from "resources/the-loai/the-loai.json";
import { PictureView } from "components/home/picture-view";
import { Link } from "react-router-dom";

export const Home = () => {
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

      {/* Hero Section Begin */}
      {/* <section className="hero">
        <div className="container">
          <div className="hero__slider owl-carousel">
            <div
              className="hero__items set-bg"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/hero/hero-1.jpg'
                })`,
              }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <div className="label">Adventure</div>
                    <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="#">
                      <span>Watch Now</span>{' '}
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hero__items set-bg"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/hero/hero-1.jpg'
                })`,
              }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <div className="label">Adventure</div>
                    <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="#">
                      <span>Watch Now</span>{' '}
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hero__items set-bg"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/hero/hero-1.jpg'
                })`,
              }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <div className="label">Adventure</div>
                    <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="#">
                      <span>Watch Now</span>{' '}
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Hero Section End */}
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <span>
                  <i className="fa fa-home"></i> Trang chủ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {categories.map((value, key) => (
                <div className="trending__product" key={key}>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>{value.name}</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn__all font-custom">
                        <Link to={value.link} className="primary-btn">
                          Xem thêm <span className="arrow_right"></span>
                        </Link>
                        {/* <a href="#" className="primary-btn">
                          Xem thêm <span className="arrow_right"></span>
                        </a> */}
                      </div>
                    </div>
                  </div>
                  {value.importJsonName === "phat" && (
                    <PictureView
                      picture={phat}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "phong-canh" && (
                    <PictureView
                      picture={phongCanh}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "me-va-be" && (
                    <PictureView
                      picture={meVaBe}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "hoa" && (
                    <PictureView
                      picture={hoa}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "tinh-yeu" && (
                    <PictureView
                      picture={tinhYeu}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "hoa-sen" && (
                    <PictureView
                      picture={hoaSen}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "nang-tho" && (
                    <PictureView
                      picture={nangTho}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "chua" && (
                    <PictureView
                      picture={chua}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "hoat-hinh" && (
                    <PictureView
                      picture={hoatHinh}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "dong-vat" && (
                    <PictureView
                      picture={dongVat}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "cung-hoang-dao" && (
                    <PictureView
                      picture={cungHoangDao}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                  {value.importJsonName === "bep" && (
                    <PictureView
                      picture={bep}
                      isOutstanding={true}
                    ></PictureView>
                  )}
                </div>
              ))}
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Top Views</h5>
                  </div>
                  <ul className="filter__controls">
                    <li className="active" data-filter="*">
                      Day
                    </li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul>
                  <div className="filter__gallery">
                    <div
                      className="product__sidebar__view__item set-bg mix day years"
                      data-setbg={
                        process.env.PUBLIC_URL + '/img/sidebar/tv-1.jpg'
                      }
                    >
                      <div className="ep">18 / ?</div>
                      <div className="view">
                        <i className="fa fa-eye"></i> 9141
                      </div>
                      <h5>
                        <a href="#">Boruto: Naruto next generations</a>
                      </h5>
                    </div>
                    <div
                      className="product__sidebar__view__item set-bg mix month week"
                      data-setbg={
                        process.env.PUBLIC_URL + '/img/sidebar/tv-2.jpg'
                      }
                    >
                      <div className="ep">18 / ?</div>
                      <div className="view">
                        <i className="fa fa-eye"></i> 9141
                      </div>
                      <h5>
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                      </h5>
                    </div>
                    <div
                      className="product__sidebar__view__item set-bg mix week years"
                      data-setbg={
                        process.env.PUBLIC_URL + '/img/sidebar/tv-3.jpg'
                      }
                    >
                      <div className="ep">18 / ?</div>
                      <div className="view">
                        <i className="fa fa-eye"></i> 9141
                      </div>
                      <h5>
                        <a href="#">
                          Sword art online alicization war of underworld
                        </a>
                      </h5>
                    </div>
                    <div
                      className="product__sidebar__view__item set-bg mix years month"
                      data-setbg={
                        process.env.PUBLIC_URL + '/img/sidebar/tv-4.jpg'
                      }
                    >
                      <div className="ep">18 / ?</div>
                      <div className="view">
                        <i className="fa fa-eye"></i> 9141
                      </div>
                      <h5>
                        <a href="#">
                          Fate/stay night: Heaven's Feel I. presage flower
                        </a>
                      </h5>
                    </div>
                    <div
                      className="product__sidebar__view__item set-bg mix day"
                      data-setbg={
                        process.env.PUBLIC_URL + '/img/sidebar/tv-5.jpg'
                      }
                    >
                      <div className="ep">18 / ?</div>
                      <div className="view">
                        <i className="fa fa-eye"></i> 9141
                      </div>
                      <h5>
                        <a href="#">Fate stay night unlimited blade works</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="product__sidebar__comment">
                  <div className="section-title">
                    <h5>New Comment</h5>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                      <img
                        src={
                          process.env.PUBLIC_URL + '/img/sidebar/comment-1.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <div className="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                      </h5>
                      <span>
                        <i className="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                      <img
                        src={
                          process.env.PUBLIC_URL + '/img/sidebar/comment-2.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <div className="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                      </h5>
                      <span>
                        <i className="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                      <img
                        src={
                          process.env.PUBLIC_URL + '/img/sidebar/comment-3.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <div className="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Kizumonogatari III: Reiket su-hen</a>
                      </h5>
                      <span>
                        <i className="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                      <img
                        src={
                          process.env.PUBLIC_URL + '/img/sidebar/comment-4.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <div className="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Monogatari Series: Second Season</a>
                      </h5>
                      <span>
                        <i className="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
};
