import { useEffect } from "react";
import CarouselImage1 from "../../assets/home/indexCarousel.jpg";
import CarouselImage3 from "../../assets/home/indexCarousel3.jpg";
import CarouselImage4 from "../../assets/home/indexCarousel4.jpeg";
import CarouselImage5 from "../../assets/home/indexCarousel5.webp";
import CarouselImage2 from "../../assets/home/kusuriya.jpeg";

function HomeCarousel() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const carouselElement = document.getElementById(
        "carouselExampleCaptions"
      );
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: "carousel",
        });
      }
    }
  }, []);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
      style={{ width: "100%", margin: 0, padding: 0 }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={CarouselImage1}
            className="d-block w-100"
            style={{ maxHeight: "93vh", objectFit: "cover", marginTop: "80px" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5
              className="fs-1 fw-bold"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              Sousou no Frieren
            </h5>
            <p
              className="fs-4"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              Follow the never-ending journey of Frieren.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImage2}
            className="d-block w-100"
            style={{ maxHeight: "93vh", objectFit: "cover", marginTop: "80px" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5
              className="fs-1 fw-bold"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              Kusuriya no Hitorigoto
            </h5>
            <p
              className="fs-4"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              An extraordinary servant at the Imperial Palace.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImage3}
            className="d-block w-100"
            style={{ maxHeight: "93vh", objectFit: "cover", marginTop: "80px" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5
              className="fs-1 fw-bold"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              Tian Guan Ci Fu
            </h5>
            <p
              className="fs-4"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              The Heaven Official's Blessing.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImage4}
            className="d-block w-100"
            style={{ maxHeight: "93vh", objectFit: "cover", marginTop: "80px" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5
              className="fs-1 fw-bold"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              Solo Leveling
            </h5>
            <p
              className="fs-4"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              A new life as a hunter.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImage5}
            className="d-block w-100"
            style={{ maxHeight: "93vh", marginTop: "80px" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5
              className="fs-1 fw-bold"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              Yubisaki no Renren
            </h5>
            <p
              className="fs-4"
              style={{
                color: "white",
                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
              }}
            >
              The sign language of love.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export { HomeCarousel };
