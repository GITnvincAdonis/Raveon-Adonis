import { Link } from "react-router-dom";
import "./HomePageStyles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const animationStates = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
  exit: {
    background: "FFFFFF",

    transition: {
      type: "spring",
    },
  },
};
export default function HomePage() {
  const [isVisibleOnDOM, updateVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      updateVisibility(true);
    }, 100);
  });

  return (
    <>
      <motion.div
        variants={animationStates}
        initial="initial"
        animate="active"
        exit="exit"
        className="vh-100 vw-100 d-flex flex-column justify-content-center intro-container position-fixed"
      >
        {isVisibleOnDOM && (
          <>
            <motion.div
              variants={animationStates}
              initial="initial"
              animate="active"
              className="align-self-center introduction-text"
            >
              Hi, I'm Raveon Adonis
            </motion.div>
            <Link to="/content" className="align-self-center">
              <motion.button
                variants={animationStates}
                className="project-button"
              >
                {" "}
                projects
              </motion.button>
            </Link>
            <motion.div
              initial={{ y: "290vh" }}
              exit={{ y: "0vh" }}
              transition={{ duration: 1, ease: "circOut" }}
              className="bg-white vh-100 position-absolute vw-100"
            ></motion.div>
          </>
        )}
      </motion.div>
    </>
  );
}
