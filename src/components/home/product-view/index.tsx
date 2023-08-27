type Props = {
  product: {
    flg: number;
    id: number;
    name: string;
    link: string;
    colorNumber: string;
    size: string;
    price: string;
    quantity: string;
  }[];
};

export const ProductView: React.FC<Props> = ({ product }) => {
  const openGallery = (link: string) => {
    const btnOpenGalleryInRouter = $('#open-gallery');
    btnOpenGalleryInRouter.val(link);
    btnOpenGalleryInRouter.click();
  };
  return (
    <>
      <div className="row">
        {product.map((data, key) => (
          <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
            <div className="product__item">
              <div
                className="product__item__pic set-bg img-thumbnail width-100"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + data.link})`,
                  cursor: 'pointer',
                }}
                onClick={() => openGallery(process.env.PUBLIC_URL + data.link)}
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
                  <a href="#">{data.name}</a>
                </h5>
              </div>
              <div className="anime__details__text">
                <p>
                  Số màu: {data.colorNumber} <br /> Kích thước: {data.size}{' '}
                  <br /> Giá: {data.price}đ
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
