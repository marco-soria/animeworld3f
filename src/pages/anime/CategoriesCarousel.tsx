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
                              src="https://a.storyblok.com/f/178900/1504x846/cce89fee50/yuji-megumi-and-nobara.png"
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
                              src="https://1.bp.blogspot.com/-2uagO5O7YBY/YGqBWj-tKdI/AAAAAAAAquA/hYT7BQkmVKQQDJxDE0zal_Txr7BJ-t8IQCLcBGAsYHQ/w1280-h720-p-k-no-nu/Episodios-Code-Geass-Lelouch-of-the-Rebellion-Relleno-Orden-Cronologico.jpg"
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
                              src="https://parallax.com.pe/wp-content/uploads/2021/11/kimetsu-01.jpg"
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
                              src="https://hanamidangos.blog/wp-content/uploads/2021/10/86-Eighty-Six-Primera-Imrpesion-Hanami-Dango-6-696x392.jpg
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
                              src="https://i0.wp.com/www.hanamidango.com/wp-content/uploads/2021/02/Heavens_Feel_1-Hanami-Dango-2.jpg"
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
                              src="https://a.storyblok.com/f/178900/940x529/b857ae7076/cyberpunk-edgerunners-resize.jpg"
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
                              src="https://sm.ign.com/t/ign_latam/screenshot/default/hades11_6hm3.1200.jpg"
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
                              src="https://hips.hearstapps.com/hmg-prod/images/shingeki-no-kyojin-1673958348.jpg"
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
                              src="https://www.animeexplained.com/wp-content/uploads/2023/11/Killua-and-Alluka.webp"
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
                              src="https://static.animecorner.me/2023/08/1692784819-10357.jpg"
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
                              src="https://static.catapult.co/cdn-cgi/image/width=1170,height=658,dpr=2,fit=cover,format=auto/production/stories/30190/cover_photos/original/fullmetal_site_1622753380_1637683000.jpg"
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
                              src="https://comicbook.com/wp-content/uploads/sites/4/2025/01/One-Piece-Anime-Episodes-Hiatus-Watch.jpg"
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
                              src="https://somoskudasai.com/wp-content/uploads/2022/06/portada_bleach-15.jpg"
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
                              src="https://d17389e216ygm.cloudfront.net/wp-content/uploads/CE_TGCF-2.jpg"
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
                              src="https://theflame.unishanoi.org/wp-content/uploads/2015/10/your-mom.jpg"
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
                              src="https://www.mundodeportivo.com/alfabeta/hero/2023/08/mushoku_tensei.1692398147.4085.jpg?width=1200"
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
                              src="https://4kwallpapers.com/images/wallpapers/gintama-ultrawide-2560x1440-16169.jpg"
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
                              src="https://a.storyblok.com/f/178900/1504x846/c063cda032/e6905a3d580453269c5ba031c84781a71666797206_main.jpg/m/filters:quality(95)format(webp)"
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
                              src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2017/12/17122705480862-e1514353799580.jpg"
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
                              src="https://www.chirchi.com/wp-content/uploads/2023/10/Bocchi-The-Rock-25.jpeg"
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
                              src="https://i0.wp.com/cuatrobastardos.com/wp-content/uploads/2023/03/i314aLh8nWdoov0Tk7nEg5zTIhS.jpg?fit=3840%2C2160&ssl=1"
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
                              src="https://images.alphacoders.com/823/823774.jpg"
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
                              src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/06/Con-estas-ilustraciones-Spy-x-Family-se-despide-de-la-parte-1-de-su-primera-temporada.jpg"
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
                              src="https://i.pinimg.com/originals/15/9d/2c/159d2cb34d021a197c3fc6b5a9b13350.jpg"
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
                              src="https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd-jjR7deXv28-09H8CsNo0iOpcEofVSGwkLYie_TMgjZ1sq8zhSwPKy80VdOMaV1qawpoxbmbtQuDfvIb1l54BO57fnG6PKuug6.jpg?r=c90"
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
                              src="https://theregoesmykokoro.com/wp-content/uploads/2018/01/screenshot-1590.png"
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
                              src="https://i.blogs.es/1abfa9/berserk-la-edad-dorada/1366_2000.jpg"
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
                              src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/chainsaw-man-3064222.jpg?tf=3840x"
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
                              src="https://www.anmosugoi.com/wp-content/uploads/2023/05/Kage-no-Jitsuryokusha-ni-Naritakute-1.jpg"
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
                              src="https://www.anmosugoi.com/wp-content/uploads/2021/12/link-click-banner.jpg"
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
                              src="https://i0.wp.com/listadeanime.com/wp-content/uploads/2020/11/konosuba-mobile-game-op.jpg"
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
                              src="https://ramenparados.com/wp-content/uploads/2009/06/kurociel.jpg"
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
