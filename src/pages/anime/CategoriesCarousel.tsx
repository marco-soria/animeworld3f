import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import actionImage from "../../assets/anime/actioncategory2.png";
import adventureImage from "../../assets/anime/adventurecategory.png";
import comedyImage from "../../assets/anime/comedycategory.png";
import fantasyImage from "../../assets/anime/fantasycategory.png";

import "./CategoriesCarousel.css";

const CategoriesCarousel = () => {
  useEffect(() => {
    let carruseles = document.querySelectorAll(".carousel");

    carruseles.forEach((carrusel) => {
      let items = carrusel.querySelectorAll(".carousel-item");
      const minPerSlide = 4;

      items.forEach((el) => {
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
          if (!next) {
            next = items[0];
          }
          let cloneChild = next.cloneNode(true) as Element;
          if (cloneChild.children[0]) {
            el.appendChild(cloneChild.children[0]);
          }
          next = next.nextElementSibling;
        }
      });
    });
  }, []);

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row m-0 p-0" style={{ border: "solid 3px" }}>
          <div className="column d-flex align-items-center">
            <h2 className="fs-2">Action</h2>
            <img
              src={actionImage}
              className="img-fluid"
              style={{ maxHeight: "8vh", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col g-0">
            <div className="container-fluid text-center my-3 g-0">
              <div className="row mx-auto my-auto justify-content-center">
                <div
                  id="recipeCarousel1"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/01jujutsukaisen_w2nh5f.png"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Jujutsu Kaisen</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613063/02codegeass_obzgxs.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Code Geass</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613063/03kimetsunoyaiba_e9c8ti.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Kimetsu no Yaiba</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/04eightysix_ilhoi8.webp
                              "
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">86</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613063/05fatestaynight_b48wle.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Fate/Stay Night</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613063/06cyberpunkedgerunners_nohycy.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Cyberpunk: Edgerunners</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613063/07saintseiya_ntowk0.webp"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Saint Seiya</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/08shingekinokyojin_vgg214.avif"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Shingeki no Kyojin</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev bg-transparent w-aut"
                    href="#recipeCarousel1"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <a
                    className="carousel-control-next bg-transparent w-aut"
                    href="#recipeCarousel1"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="row m-0 p-0" style={{ border: "solid 3px" }}>
          <div className="column d-flex align-items-center">
            <h2 className="fs-2">Adventure</h2>
            <img
              src={adventureImage}
              className="img-fluid"
              style={{ maxHeight: "8vh", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col g-0">
            <div className="container-fluid text-center my-3 g-0">
              <div className="row mx-auto my-auto justify-content-center">
                <div
                  id="recipeCarousel2"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/09hunterxhunter_tzyxw7.webp"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Hunter x Hunter</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/10sousounofrieren_xvabk2.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Sousou no Frieren</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/11fma_rye3ku.webp"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Fullmetal Alchemist</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613064/12onepiece_eppjhw.webp"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">One Piece</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/13bleach_voj2ww.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Bleach</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/14tianguancifu_ncgr3t.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Tian Guan Ci Fu</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/15mushishi_mplz99.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Mushishi</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/16mushokutensei_e2chh3.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Mushoku Tensei</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev bg-transparent w-aut"
                    href="#recipeCarousel2"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <a
                    className="carousel-control-next bg-transparent w-aut"
                    href="#recipeCarousel2"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="row m-0 p-0" style={{ border: "solid 3px" }}>
          <div className="column d-flex align-items-center">
            <h2 className="fs-2">Comedy</h2>
            <img
              src={comedyImage}
              className="img-fluid"
              style={{ maxHeight: "8vh", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col g-0">
            <div className="container-fluid text-center my-3 g-0">
              <div className="row mx-auto my-auto justify-content-center">
                <div
                  id="recipeCarousel3"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/17gintama_lnkvwe.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Gintama</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/18kaguyasama_q1lokh.webp"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Kaguya-sama</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/19owarimonogatari_ulurp7.webp"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Owarimonogatari</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/20bocchitherock_kswyuk.webp"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Bocchi The Rock</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613065/21mobpsycho_hc2yef.webp"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Mob Psycho</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613066/22gto_uicoic.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">GTO</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/23spyforfamily_uvd3na.webp"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Spy x Family</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/24tatamigalaxy_n8lpwk.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">The Tatami Galaxy</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev bg-transparent w-aut"
                    href="#recipeCarousel3"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <a
                    className="carousel-control-next bg-transparent w-aut"
                    href="#recipeCarousel3"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="row m-0 p-0" style={{ border: "solid 3px" }}>
          <div className="column d-flex align-items-center">
            <h2 className="fs-2">Fantasy</h2>
            <img
              src={fantasyImage}
              className="img-fluid"
              style={{ maxHeight: "8vh", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col g-0">
            <div className="container-fluid text-center my-3 g-0">
              <div className="row mx-auto my-auto justify-content-center">
                <div
                  id="recipeCarousel4"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/25violetevergarden_w5lre6.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Violet Evergarden</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/26madeinabyss_dqyvti.png"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Made in Abyss</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/27berserk_cxwopw.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Berserk</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/28chainsawman_onptbg.jpg"
                              className="card d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Chainsaw Man</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613068/29kagenojitsuyokusha_alfvlw.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Kage no Jitsuyokusha</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613069/30linkclick_mk3hpy.webp"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Shiguang Dailiren</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613071/31konosuba_zie4na.webp"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Konosuba</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <div className="card-img">
                            <img
                              src="https://res.cloudinary.com/dqxiijdlw/image/upload/v1773613071/32kuroshitsuji_rrhyef.jpg"
                              className="d-block w-100"
                              style={{
                                maxHeight: "40vh",
                                objectFit: "cover",
                                border: "solid 1px #9500ff",
                              }}
                            />
                          </div>
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="">Kuroshitsuji</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev bg-transparent w-aut"
                    href="#recipeCarousel4"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <a
                    className="carousel-control-next bg-transparent w-aut"
                    href="#recipeCarousel4"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CategoriesCarousel };
