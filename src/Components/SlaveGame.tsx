import { motion, useInView } from "framer-motion";
import "./SlaveGameStyles.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

// const url1 = "../assets/slaveSS1.png";
// const url2 = "../assets/slaveSS2.png";
// const url3 = "../assets/slaveSS3.png";

import s1 from "../assets/slaveSS1.png";
import s2 from "../assets/slaveSS2.png";
import s3 from "../assets/slaveSS3.png";

import MainPageButton from "./MainPageButton";


function SliderContainer(props: {
  children: any;
  className: any;
  displacement: any;
}) {
  const { children, className, displacement } = props;
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{
        transform: inview ? "none" : "translateX(" + displacement + ")",
        opacity: inview ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </motion.div>
  );
}
export default function Slavegame() {
  // const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState();

  // const [ss1, setSS1] = useState("");
  // const [ss2, setSS2] = useState("");
  // const [ss3, setSS3] = useState("");

  // useEffect(() => {
  //   const fetchLinks = async () => {
  //     setLoading(true);
  //     try {
  //       const response1 = await fetch(`${url1}`);
  //       const post1 = (await response1.json) as unknown;

  //       const response2 = await fetch(`${url2}`);
  //       const post2 = (await response2.json) as unknown;

  //       const response3 = await fetch(`${url3}`);
  //       const post3 = (await response3.json) as unknown;

  //       setSS1(String(post1));
  //       setSS2(String(post2));
  //       setSS3(String(post3));
  //     } catch (e: any) {
  //       setError(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   console.log(ss1);
  //   fetchLinks();
  // }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <div>loading</div>
  //     </>
  //   );
  // }
  // if (error) {
  //   return (
  //     <>
  //       <div>error occured</div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="vh-100 vw-100  container">
        <MainPageButton></MainPageButton>
        <div className="row  align-items-center   vh-100 ">
          <SliderContainer className={"col-sm-6"} displacement={"-200px"}>
            <div className="">
              <div id="carouselExample" className="carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={s1} className="slave-game-images" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={s2} className="slave-game-images" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={s3} className="slave-game-images" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
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
                  data-bs-target="#carouselExample"
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

          <SliderContainer
            displacement="200px"
            className="col-sm-6  slave-game-text p-5 d-flex justify-content-center flex-column "
          >
            <h1>1763 Rebellion game</h1>
            <div>
              <li>Role in project</li>

              <h4>Lead Programmer/ Lead 3d artist</h4>
            </div>
            <div>
              <li>GAME files</li>

              <h4>
                <Link to={"https://nvincadonis.itch.io/1763"}>Itch Link</Link>
              </h4>
            </div>
            <div>
              <li>DEVLOG</li>
              <h4>
                <Link to={"https://youtu.be/VrmpZzAayIA"}>log</Link>
              </h4>
            </div>
            <div>
              <li>GITHUB REPOSITORY</li>
              <h4>
                {" "}
                <Link
                  to={"https://github.com/GITnvincAdonis/Gaming-And-Design-IA"}
                >
                  Repositiory
                </Link>
              </h4>
            </div>
            <div>
              <li>DEMO REEL</li>
              <h4>
                <Link to={"https://youtu.be/qbgDWr_XwBw"}>GamePlay</Link>
              </h4>
            </div>
          </SliderContainer>
        </div>
      </div>
    </>
  );
}
