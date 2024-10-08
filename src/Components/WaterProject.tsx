import "./WaterProjectStyles.css";

import fbm from "../assets/fbm-water.mp4";
import SOS from "../assets/SOS.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MainPageButton from "./MainPageButton";
import { Suspense } from "react";

export default function WaterProject() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="border vw-100 position-fixed bg-black mega-water-container"
      >
        <MainPageButton></MainPageButton>
        <Suspense
          fallback={
            <div className="vw-100 vh-100 text-center suspense-text">
              {" "}
              Video loading ....
            </div>
          }
        >
          <div id="carouselExampleCaptions" className="carousel slide">
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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <video src={fbm} className="water-vid water-vid-1" controls />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fractional-Brownian-Motion Simulation Technique</h5>
                  <p>
                    An improvement to the simple sum-of-sines technique,
                    implementing more randomzation into the shader algorithm
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <video src={SOS} className="water-vid water-vid-2" controls />
                <div className="carousel-caption d-none d-md-block">
                  <h5>SUM-OF-SINES Water Surface Approximation</h5>
                  <p>
                    The application of simple trigonometry and calculus to
                    produce a GPU-enabled simulation
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
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Suspense>

        <div className="directory-links d-flex justify-content-center align-items-center ">
          <Link to="https://github.com/GITnvincAdonis/WATERSURFACE-Sim">
            {" "}
            <button className="repo-button">Git Repository</button>
          </Link>
          <Link to="https://docs.google.com/document/d/1fyRw0YNs5jUE8CoqkmMYZ8oeDdH93nwHlhEJG2LshBw/edit?usp=sharing">
            {" "}
            <button className=" documentation">Documentation</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
