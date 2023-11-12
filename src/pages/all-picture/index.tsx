import "./index.css";
import { PictureDetailView } from "components/home/picture-view-detail";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICategory } from "utils/interface/category.interface";
import { IPicture } from "utils/interface/picture.interface";
import useGoogleSheets from "use-google-sheets";

export const AllPicture = () => {
  const [categories, setCategories] = useState<ICategory[]>();

  const init = () => {
    setTimeout(() => {
      $(".loader").fadeOut();
      $("#preloder").delay(100).fadeOut("slow");
    }, 1000);
  };

  const REACT_APP_GOOGLE_API_KEY = "AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ";
  const REACT_APP_GOOGLE_SHEETS_ID =
    "14qL7AgxZQDm8GAqj0dUQ49m03O_JHS6ENd862WLr9Gc";

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    console.log("loading....");
  } else {
    init();
  }
  if (error) {
    console.log("Error!");
  }

  useEffect(() => {
    initPicture(data);
  }, [data]);

  const initPicture = (data: any) => {
    // let categoryList: ICategory[] = [];
    // for (let i = 0; i < data.length; i++) {
    //   // Thông tin chung
    //   if (i === 0) {
    //     continue;
    //   }
    //   // Thể loại
    //   else if (i === 1) {
    //     const sheetData = data[i].data;
    //     for (let j = 1; j < sheetData.length; j++) {
    //       const element = sheetData[j];
    //       let category: ICategory = {};
    //       category.id = element.id;
    //       category.name = element.name;
    //       if (element.sheet_name === undefined) {
    //         category.sheetName = "";
    //       } else {
    //         category.sheetName = element.sheet_name;
    //       }
    //       categoryList.push(category);
    //     }
    //   } else {
    //     // data
    //     let pictureData: IPicture[] = [];
    //     const sheetData = data[i].data;
    //     for (let j = 1; j < sheetData.length; j++) {
    //       const element = sheetData[j];
    //       let pic: IPicture = {};
    //       pic.id = Number(element.id);
    //       pic.name = element.name;
    //       pic.link = element.link;
    //       pic.colorNumber = element.color_number;
    //       pic.size = element.size;
    //       pic.price = element.price;
    //       pic.quantity = element.quantity;
    //       pic.outstanding = element.outstanding;
    //       if (element.order !== undefined && element.order !== "") {
    //         pic.order = Number(element.order);
    //       }
    //       pic.shoppeCode = element.shoppe_code;
    //       pic.kamiCode = element.kami_code;
    //       pictureData.push(pic);
    //     }
    //     let cateTemp = categoryList.filter((x) => x.sheetName === data[i].id);
    //     let category: ICategory;
    //     if (cateTemp !== undefined && cateTemp.length > 0) {
    //       category = cateTemp[0];
    //       category.pictures = pictureData;
    //     }
    //   }
    // }
    // setCategories(categoryList);
  };

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
            <div className="col-lg-8 col-lg-8 col-md-8 col-sm-8">
              <div className="breadcrumb__links">
                <Link to={"/"}>
                  <i className="fa fa-home"></i> Trang chủ
                </Link>
                <span>Tất cả tranh</span>
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
                {categories?.map((value, key) => (
                  <PictureDetailView
                    pictures={value.pictures}
                  ></PictureDetailView>
                ))}
                {/* {category?.importJsonName === "phat" && (
                  <PictureDetailView
                    picture={phat}
                    category={"phat"}
                  ></PictureDetailView>
                )}
                {category?.importJsonName === "phong-canh" && (
                  <PictureDetailView picture={phongCanh}></PictureDetailView>
                )}
                {category?.importJsonName === "me-va-be" && (
                  <PictureDetailView picture={meVaBe}></PictureDetailView>
                )}
                {category?.importJsonName === "hoa" && (
                  <PictureDetailView picture={hoa}></PictureDetailView>
                )}
                {category?.importJsonName === "tinh-yeu" && (
                  <PictureDetailView picture={tinhYeu}></PictureDetailView>
                )}
                {category?.importJsonName === "hoa-sen" && (
                  <PictureDetailView picture={hoaSen}></PictureDetailView>
                )}
                {category?.importJsonName === "nang-tho" && (
                  <PictureDetailView picture={nangTho}></PictureDetailView>
                )}
                {category?.importJsonName === "chua" && (
                  <PictureDetailView picture={chua}></PictureDetailView>
                )}
                {category?.importJsonName === "hoat-hinh" && (
                  <PictureDetailView picture={hoatHinh}></PictureDetailView>
                )}
                {category?.importJsonName === "dong-vat" && (
                  <PictureDetailView picture={dongVat}></PictureDetailView>
                )}
                {category?.importJsonName === "cung-hoang-dao" && (
                  <PictureDetailView picture={cungHoangDao}></PictureDetailView>
                )}
                {category?.importJsonName === "bep" && (
                  <PictureDetailView picture={bep}></PictureDetailView>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
};
