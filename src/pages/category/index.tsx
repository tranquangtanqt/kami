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
import "./index.css";
import categories from "resources/the-loai/the-loai.json";
import { ProductView } from "components/home/product-view";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICategory } from "utils/interface/category.interface";

export const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState<ICategory>();

  const initCategory = (theloai: string) => {
    categories.forEach((value) => {
      if (theloai === value.importJsonName) {
        setCategory(value as ICategory);
      }
    });
  };
  useEffect(() => {
    initCategory(params.theloai ?? "");
  }, [params]);

  const init = () => {
    setTimeout(() => {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
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
                <Link to={"/"}>Thể loại</Link>
                <span>{category?.name}</span>
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
              <div className="product__page__content">
                <div className="product__page__title">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>{category?.name}</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="product__page__filter">
                        <p>Sắp xếp:</p>
                        <select>
                          <option value="">A-Z</option>
                          <option value="">1-10</option>
                          <option value="">10-50</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {category?.importJsonName === "phat" && (
                  <ProductView picture={phat}></ProductView>
                )}
                {category?.importJsonName === "phong-canh" && (
                  <ProductView picture={phongCanh}></ProductView>
                )}
                {category?.importJsonName === "me-va-be" && (
                  <ProductView picture={meVaBe}></ProductView>
                )}
                {category?.importJsonName === "hoa" && (
                  <ProductView picture={hoa}></ProductView>
                )}
                {category?.importJsonName === "tinh-yeu" && (
                  <ProductView picture={tinhYeu}></ProductView>
                )}
                {category?.importJsonName === "hoa-sen" && (
                  <ProductView picture={hoaSen}></ProductView>
                )}
                {category?.importJsonName === "nang-tho" && (
                  <ProductView picture={nangTho}></ProductView>
                )}
                {category?.importJsonName === "chua" && (
                  <ProductView picture={chua}></ProductView>
                )}
                {category?.importJsonName === "hoat-hinh" && (
                  <ProductView picture={hoatHinh}></ProductView>
                )}
                {category?.importJsonName === "dong-vat" && (
                  <ProductView picture={dongVat}></ProductView>
                )}
                {category?.importJsonName === "cung-hoang-dao" && (
                  <ProductView picture={cungHoangDao}></ProductView>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
};
