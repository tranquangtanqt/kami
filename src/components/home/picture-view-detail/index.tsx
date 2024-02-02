import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APP, PICTURE } from "utils/constants/app.constants";
import { IPicture } from "utils/interface/picture.interface";

type Props = {
  pictures: IPicture[];
};

export const PictureDetailView: React.FC<Props> = ({ pictures }) => {
  const [pictureList, setPictureList] = useState<IPicture[]>();
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageTotal, setPageTotal] = useState<number[]>([]);

  const initPicures = (picture: IPicture[]) => {
    let pictureTemp: IPicture[] = [...picture];
    pictureTemp = pictureTemp?.sort((a, b) => {
      if (a.order === undefined || b.order === undefined) {
        return 99999;
      }
      return a.order - b.order;
    });
    pictureTemp = pictureTemp?.slice(0, PICTURE.TAKE);
    setPictureList(pictureTemp);
    let total = 0;
    if (picture?.length !== undefined) {
      total = Math.ceil(picture?.length / PICTURE.TAKE);
    }
    setPageTotal(
      Array(total)
        .fill(null)
        .map((_, i) => i + 1)
    );
  };

  useEffect(() => {
    initPicures(pictures);
  }, [pictures]);

  const openGallery = (link: string) => {
    const btnOpenGalleryInRouter = $("#open-gallery");
    btnOpenGalleryInRouter.val(link);
    btnOpenGalleryInRouter.click();
  };

  const showLoading = () => {
    $(".loader").fadeIn();
    $("#preloder").fadeIn("slow");
  };

  const gotoPage = (page?: number) => {
    showLoading();
    setTimeout(() => {
      if (pictures !== undefined) {
        let pictureTemp: IPicture[] = [...pictures];

        pictureTemp = pictureTemp?.sort((a, b) => {
          if (a.order === undefined || b.order === undefined) {
            return 99999;
          }

          return a.order - b.order;
        });

        if (page !== undefined) {
          pictureTemp = pictureTemp.slice((page - 1) * PICTURE.TAKE, (page - 1) * PICTURE.TAKE + PICTURE.TAKE);
          setPageCurrent(page);
          setPictureList(pictureTemp);
        } else {
          setPageCurrent(1);
        }
      }
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }, 700);
  };

  return (
    <>
      <Fragment>
        <div className="row">
          {pictureList?.map((data, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <div className="product__item">
                <div
                  className="product__item__pic set-bg img-thumbnail width-100"
                  style={{
                    backgroundImage: `url(${APP.PUBLIC_URL + data.link})`,
                    cursor: "pointer",
                  }}
                  onClick={() => openGallery(APP.PUBLIC_URL + data.link)}
                >
                  {/* <img
              className="width-100 img-thumbnail"
              src={process.env.PUBLIC_URL + data.link}
            /> */}
                  <div className="view">
                    <i className="fa fa-first-order"></i> {data.quantity}
                  </div>
                </div>
                <div className="product__item__text">
                  <h5>
                    <Link to={""}>{data.name}</Link>
                  </h5>
                </div>
                <div className="anime__details__text">
                  <p>
                    <span>Số màu: {data.colorNumber}</span>
                    {data.shoppeCode !== undefined && data.shoppeCode.trim() !== "" ? (
                      <span className="pull-right font-weight-bold">{data.shoppeCode}</span>
                    ) : (
                      <span className="pull-right font-weight-bold">{data.kamiCode}</span>
                    )}
                    <br /> Kích thước: {data.size} <br /> Giá: {data.price}đ
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="product__pagination">
            {pageCurrent !== 1 && (
              <Link to={""}>
                <i className="fa fa-angle-double-left" onClick={() => gotoPage(1)}></i>
              </Link>
            )}
            {pageTotal?.map((item, key) => (
              <Link
                to={""}
                className={pageCurrent === item ? "current-page" : ""}
                onClick={() => gotoPage(item)}
                key={key}
              >
                {item}
              </Link>
            ))}

            {pageCurrent !== pageTotal?.length && (
              <Link to={""}>
                <i className="fa fa-angle-double-right" onClick={() => gotoPage(pageTotal?.length)}></i>
              </Link>
            )}
          </div>
        </div>
      </Fragment>
    </>
  );
};

// const [pictureList, setPictureList] = useState<IPicture[] | undefined>(() => {
//   // if (isOutstanding !== undefined && isOutstanding) {
//   //   picture = picture.filter((x) => {
//   //     return (
//   //       x.outstanding !== undefined && x.outstanding?.trim().length !== 0
//   //     );
//   //   });
//   //   picture = picture.sort((a, b) => {
//   //     if (a.order === undefined || b.order === undefined) {
//   //       return 99999;
//   //     }

//   //     return a.order - b.order;
//   //   });
//   //   return picture;
//   // }
//   picture = picture?.sort((a, b) => {
//     if (a.order === undefined || b.order === undefined) {
//       return 99999;
//     }

//     return a.order - b.order;
//   });
//   return picture?.slice(0, PICTURE.TAKE);
// });
