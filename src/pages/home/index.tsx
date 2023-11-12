import "./index.css";
import { PictureView } from "components/home/picture-view";
import { Link } from "react-router-dom";
import useGoogleSheets from "use-google-sheets";
import { useEffect, useState } from "react";
import { IPicture } from "utils/interface/picture.interface";
import { ICategory } from "utils/interface/category.interface";

export const Home = () => {
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
    let categoryList: ICategory[] = [];

    for (let i = 0; i < data.length; i++) {
      // Thông tin chung
      if (i === 0) {
        continue;
      }
      // Thể loại
      else if (i === 1) {
        const sheetData = data[i].data;

        for (let j = 1; j < sheetData.length; j++) {
          const element = sheetData[j];

          let category: ICategory = {
            pictures: [],
          };
          category.id = element.id;
          category.name = element.name;
          if (element.sheet_name === undefined) {
            category.sheetName = "";
          } else {
            category.sheetName = element.sheet_name;
          }

          categoryList.push(category);
        }
      } else {
        // data
        let pictureData: IPicture[] = [];
        const sheetData = data[i].data;
        for (let j = 1; j < sheetData.length; j++) {
          const element = sheetData[j];
          let pic: IPicture = {};
          pic.id = Number(element.id);
          pic.name = element.name;
          pic.link = element.link;
          pic.colorNumber = element.color_number;
          pic.size = element.size;
          pic.price = element.price;
          pic.quantity = element.quantity;
          pic.outstanding = element.outstanding;
          if (element.order !== undefined && element.order !== "") {
            pic.order = Number(element.order);
          }
          pic.shoppeCode = element.shoppe_code;
          pic.kamiCode = element.kami_code;

          pictureData.push(pic);
        }

        let cateTemp = categoryList.filter((x) => x.sheetName === data[i].id);

        let category: ICategory;
        if (cateTemp !== undefined && cateTemp.length > 0) {
          category = cateTemp[0];
          category.pictures = pictureData;
        }
        console.log(pictureData);
      }
    }

    setCategories(categoryList);
    console.log(categoryList);
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
              {categories?.map((value, key) => (
                <div className="trending__product" key={key}>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>{value.name}</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn__all font-custom">
                        <Link
                          to={"/tranh/" + value?.sheetName}
                          className="primary-btn"
                        >
                          Xem thêm <span className="arrow_right"></span>
                        </Link>
                        {/* <a href="#" className="primary-btn">
                          Xem thêm <span className="arrow_right"></span>
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <PictureView
                    pictures={value?.pictures}
                    isOutstanding={true}
                  ></PictureView>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
};
