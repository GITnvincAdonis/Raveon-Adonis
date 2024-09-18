import { motion } from "framer-motion";
import "./HeadphoneRenderStyles.css";
import video from "../assets/render.mp4";

import MainPageButton from "./MainPageButton";

export default function HeadphoneRender() {
  const listItems = ["./shot3.jpg", "./shot2.png", "./shot1.jpg"];

  return (
    <>
      <MainPageButton></MainPageButton>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="vw-100 border d-flex justify-content-center align-items-center main-head-container"
      >
        <div className="border headphone-image-containers">
          <div className="headphone-image-container headphone-image-container-1">
            <video className="headphone-vid" src={video} autoPlay loop></video>
          </div>
          {listItems.map((item, index) => {
            let string = item;
            return (
              <div
                key={index}
                className={
                  "headphone-image-container headphone-image-container-" +
                  (index + 2)
                }
              >
                <img src={string} alt="" className="headphone-image-source" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
