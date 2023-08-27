import './index.css';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const init = () => {
    setTimeout(() => {
      $('.loader').fadeOut();
      $('#preloder').delay(100).fadeOut('slow');
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
                <Link to={'/'}>
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
              <div className="blog__details__title">
                <h6>
                  Action, Magic <span>- March 08, 2020</span>
                </h6>
                <h2>Anime for Beginners: 20 Pieces of Essential Viewing</h2>
                <div className="blog__details__social">
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook-square"></i> Facebook
                  </a>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i> Pinterest
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin-square"></i> Linkedin
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter-square"></i> Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__text">
                  <p>
                    As a result the last couple of eps haven’t been super
                    exciting for me, because they’ve been more like settling
                    into a familiar and comfortable routine.  We’re seeing
                    character growth here but it’s subtle (apart from Shouyou,
                    arguably).  I mean, Tobio being an asshole is nothing new –
                    it’s kind of the foundation of his entire character arc. 
                    Confronting whether his being an asshole is a problem for
                    the Crows this directly is a bit of an evolution, and
                    probably an overdue one at that, but the overall dynamic
                    with Kageyama is basically unchanged.
                  </p>
                </div>
                <div className="blog__details__item__text">
                  <h4>Tobio-Nishinoya showdown:</h4>
                  <p>
                    In Japan the idea of a first-year speaking to a senior the
                    way Kageyama did to Asahi is a lot more shocking than it
                    would be in the West, but Tobio calling out teammates in
                    genuinely rude fashion in the middle of a match is what got
                    him isolated in the first place.  It’s better for the Crows
                    to sort this out in practice matches than the real deal, but
                    this is really on Tobio – he has to figure out how to
                    co-exist with others in a team environment.
                  </p>
                </div>
                <div className="blog__details__item__text">
                  <h4>Nanatsu no Taizai: Kamigami No Gekirin</h4>
                  <p>
                    In Japan the idea of a first-year speaking to a senior the
                    way Kageyama did to Asahi is a lot more shocking than it
                    would be in the West, but Tobio calling out teammates in
                    genuinely rude fashion in the middle of a match is what got
                    him isolated in the first place.  It’s better for the Crows
                    to sort this out in practice matches than the real deal, but
                    this is really on Tobio – he has to figure out how to
                    co-exist with others in a team environment.
                  </p>
                </div>
                <div className="blog__details__item__text">
                  <h4>ID:Ianvaded:</h4>
                  <p>
                    In Japan the idea of a first-year speaking to a senior the
                    way Kageyama did to Asahi is a lot more shocking than it
                    would be in the West, but Tobio calling out teammates in
                    genuinely rude fashion in the middle of a match is what got
                    him isolated in the first place.  It’s better for the Crows
                    to sort this out in practice matches than the real deal, but
                    this is really on Tobio – he has to figure out how to
                    co-exist with others in a team environment.
                  </p>
                </div>
                <div className="blog__details__tags">
                  <a href="#">Healthfood</a>
                  <a href="#">Sport</a>
                  <a href="#">Game</a>
                </div>
                <div className="blog__details__btns">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="blog__details__btns__item">
                        <h5>
                          <a href="#">
                            <span className="arrow_left"></span> Building a
                            Better LiA...
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog__details__btns__item next__btn">
                        <h5>
                          <a href="#">
                            Mugen no Juunin: Immortal – 21{' '}
                            <span className="arrow_right"></span>
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog__details__form">
                  <h4>Leave A Commnet</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Message"></textarea>
                        <button type="submit" className="site-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
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
