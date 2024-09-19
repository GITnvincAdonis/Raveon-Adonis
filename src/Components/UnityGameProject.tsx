import { Link } from "react-router-dom";
import "./UnityGameStyles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MainPageButton from "./MainPageButton";

function SliderContainer(props: { children: any }) {
  const { children } = props;
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: inview ? "none" : "translateY(20px)",
        opacity: inview ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
export default function UnityGameProject() {
  return (
    <div className="page-window">
      <MainPageButton></MainPageButton>
      <div className="snapshot-container ">
        <SliderContainer>
          <h1 className="snap-text">ROBOTO</h1>
          <div className="snapshot snapshot-0">
            <img className="main-image" src="LevelSceenSHot.png" alt="" />
          </div>
        </SliderContainer>
        <SliderContainer>
          <div className="snapshot snapshot-1 ">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="carousel-image-containers">
                    <img className="Im-comtainer" src="bap.png" alt="" />
                  </div>
                  <div className="carousel-caption  "></div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="carousel-image-containers">
                    <img className="Im-comtainer" src="i.png" alt="" />
                  </div>
                  <div className="carousel-caption  "></div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-image-containers">
                    <img
                      className="Im-comtainer"
                      src="LevelSceenSHot.png"
                      alt=""
                    />
                  </div>
                  <div className="carousel-caption  "></div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-image-containers">
                    <img className="Im-comtainer" src="lvl1.png" alt="" />
                  </div>
                  <div className="carousel-caption "></div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-image-containers">
                    <img className="Im-comtainer" src="LVL2.png" alt="" />
                  </div>
                  <div className="carousel-caption  "></div>
                </div>
              </div>
              <button
                className="carousel-control-prev move-buttons"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next move-buttons"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </SliderContainer>
      </div>
      <div className=" d-flex flex-column text-container ">
        <SliderContainer>
          <h1 className="top-header">UNITY GAME OVERVIEW</h1>
          <h3>
            This project served to help me code using{" "}
            <span className="highlighted">system architecture</span>, applying
            it in an engaging medium. It is the culmination of a year of
            experimenting and learning the{" "}
            <span className="highlighted">UNITY development tool</span>.
            "Roboto" itself took 3 months of development time, following a
            "failed" construction of a prior prototype.
          </h3>
        </SliderContainer>

        <SliderContainer>
          <div className="repository-link">Repository</div>
          <Link
            className="hyper-link"
            to={"https://github.com/GITnvincAdonis/Non-Urp-Platform"}
          >
            Non-Urp-Platform
          </Link>
        </SliderContainer>
        <SliderContainer>
          <div className="Itch-link">Published Game</div>
          <Link
            className="hyper-link"
            to={"https://nvincadonis.itch.io/roboto"}
          >
            ROBOTO-GAME
          </Link>
        </SliderContainer>
        <SliderContainer>
          <div className="devlog-link">Devlog</div>
          <Link
            className="hyper-link"
            to={"https://www.youtube.com/watch?v=pBj-lgULtWc"}
          >
            Devlog-video
          </Link>
        </SliderContainer>
      </div>
    </div>
  );
}
