import "./ControllerRenderStyles.css";

import Video from "../assets/controllerRender.mp4";
import im1 from "../assets/render 1.jpg";
import im2 from "../assets/render 2.jpg";
import im3 from "../assets/render3.jpg";
import { lazy, useState } from "react";
import { motion } from "framer-motion";

const MainPageButton = lazy(() => import("./MainPageButton"));

export default function ControllerRender() {
  let imBoxes = [im1, im2, im3];
  let classes = [
    "first-controller-image",
    "second-controller-image",
    "third-controller-image",
  ];

  return (
    <>
      <MainPageButton></MainPageButton>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black vh-100 vw-100 border p-4 pb-5 d-flex justify-content-center align-items-center position-fixed"
      >
        <video
          className=" d-flex justify-content-center align-items-center h-max-content controller-vid border"
          //cldVid={cld.video("assets/controllerRender").quality("auto")}
          src={Video}
          controls
          
        ></video>
        {imBoxes.map((item, index) => {
          const [isVisible, updateVisibility] = useState(false);
          return (
            <img
              className={
                isVisible
                  ? "visible-class position-fixed controller-im-container " +
                    classes[index]
                  : "position-fixed  controller-im-container " + classes[index]
              }
              key={index}
              src={item}
              alt=""
              onClick={() => {
                if (isVisible == true) {
                  updateVisibility(false);
                } else {
                  updateVisibility(true);
                }
              }}
            />
          );
        })}
      </motion.div>
    </>
  );
}
