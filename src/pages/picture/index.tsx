import "./index.css";
import { PictureDetailView } from "components/home/picture-view-detail";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICategory } from "utils/interface/category.interface";
import useGoogleSheets from "use-google-sheets";
import { IPicture } from "utils/interface/picture.interface";

export const PicturePage = () => {
  const params = useParams();
  const [category, setCategory] = useState<ICategory>();
  const navigate = useNavigate();

  const REACT_APP_GOOGLE_API_KEY = "AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ";
  const REACT_APP_GOOGLE_SHEETS_ID =
    "14qL7AgxZQDm8GAqj0dUQ49m03O_JHS6ENd862WLr9Gc";

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
  });

  const init = () => {
    setTimeout(() => {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
    }, 1000);
  };

  if (loading) {
    console.log("loading....");
  } else {
    init();
  }
  if (error) {
    console.log("Error!");
  }

  useEffect(() => {
    initPicture(params.category ?? "", data);
  }, [params.category, data]);

  const initPicture = (sheet_name: string, data: any) => {
    let pictureData: IPicture[] = [];
    let cate: ICategory = {
      pictures: [],
    };

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

          if (element.sheet_name === sheet_name) {
            cate.id = element.id;
            cate.name = element.name;
            cate.sheetName = element.sheet_name;
          }
        }
      } else {
        if (data[i].id === sheet_name) {
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

          cate.pictures = pictureData;
        }
      }
    }
    if (data.length > 0 && pictureData.length === 0) {
      navigate("/");
    }

    setCategory(cate);
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
                <Link to={"/"}>
                  <i className="fa fa-home"></i> Trang chủ
                </Link>
                <Link to={"/"}>Tranh</Link>
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
                {category?.pictures !== undefined && (
                  <PictureDetailView
                    pictures={category?.pictures}
                  ></PictureDetailView>
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
