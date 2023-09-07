import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { APP, PICTURE } from "utils/constants/app.constants";
import { IPicture } from "utils/interface/picture.interface";

type Props = {
  picture: IPicture[];
  isOutstanding?: boolean;
};

export const PictureView: React.FC<Props> = ({ picture, isOutstanding }) => {
  const [pictureList] = useState<IPicture[]>(() => {
    if (isOutstanding !== undefined && isOutstanding) {
      picture = picture.filter((x) => {
        return (
          x.outstanding !== undefined && x.outstanding?.trim().length !== 0
        );
      });
      picture = picture.sort((a, b) => {
        if (a.order === undefined || b.order === undefined) {
          return 99999;
        }

        return a.order - b.order;
      });
    } else {
      picture = picture.sort((a, b) => {
        if (a.order === undefined || b.order === undefined) {
          return 99999;
        }

        return a.order - b.order;
      });
    }

    return picture.slice(0, PICTURE.TAKE);
  });

  const openGallery = (link: string) => {
    const btnOpenGalleryInRouter = $("#open-gallery");
    btnOpenGalleryInRouter.val(link);
    btnOpenGalleryInRouter.click();
  };

  return (
    <>
      <Fragment>
        <div className="row">
          {pictureList.map((data, key) => (
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
                    {data.shoppeCode !== undefined &&
                    data.shoppeCode.trim() !== "" ? (
                      <span className="pull-right font-weight-bold">
                        {data.shoppeCode}
                      </span>
                    ) : (
                      <span className="pull-right font-weight-bold">
                        {data.kamiCode}
                      </span>
                    )}
                    <br /> Kích thước: {data.size} <br /> Giá: {data.price}đ
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </>
  );
};
