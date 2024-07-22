import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../assets/blob1.png";
import myImage from "../assets/my-img.png";
import c from "../assets/c.png";
import js from "../assets/js.png";
import react1 from "../assets/react.png";
import html1 from "../assets/html.png";
import dev from "../assets/new_dev.png";
import ContactUsForm from "../components/ContactUsForm";
import arrow from "../assets/rotated_arrow.png";
import { skills1 as skill1 } from "../data/skillList1.js";
import { skills2 as skill2 } from "../data/skillList2.js";
import ReactStars from "react-stars";
import AnimatedStars from "./AnimatedStars.jsx";
import skillArrow from "../assets/skillArrow.png";
import { ProjectData } from "../data/project.js";
import ProjectCard from "./ProjectCard.jsx";

function Landing() {
  const [renderNumber, setRenderNumber] = useState(1);
  const typeAnimRef = useRef(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isAnimVisible, setAnimVisible] = useState(false);
  const formRef = useRef();
  const animRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animRef.current) {
          setAnimVisible(true);
          console.log(isAnimVisible);
        } else {
          setAnimVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (animRef.current) {
      observer.observe(animRef.current);
    }
  }, []);

  function handleClick() {
    setFormVisible(true);
  }

  function handleSubmitClick() {
    setFormVisible(false);
  }

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    // This effect now runs on the FIRST render AND when renderNumber changes
    if (renderNumber === 1) {
      const timer = setTimeout(() => {
        setRenderNumber(2);
      }, 1500);

      return () => clearTimeout(timer);
    }

    if (renderNumber === 2) {
      const timer = setTimeout(() => {
        setRenderNumber(3);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [renderNumber]);

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormVisible]);

  return (
    <div className="w-full py-5 overflow-y-hidden">
      {/*Hero*/}
      <div className="mx-auto relative flex flex-row justify-stretch  w-4/5  items-center">
        {/*Left Section */}
        <div className="flex flex-col gap-3 font-black w-2/4">
          <div>
            <TypeAnimation
              ref={typeAnimRef}
              sequence={[
                "Divy",
                0,
                "Divy Prakash",
                0,
                "Divy Prakash Pandey",
                0, // Display for 1 second
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              wrapper="div"
              deletionSpeed={Infinity}
              cursor={false}
            />
          </div>

          {/* Conditional Rendering 1 */}
          <div>
            {renderNumber >= 2 && (
              <div
                className={`transition-opacity transform  ease-in-out duration-1000 delay-1000 ${
                  renderNumber >= 2
                    ? " opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <TypeAnimation
                  sequence={[
                    "FULL",
                    0,
                    "FULL STACK",
                    0,
                    "FULL STACK WEB",
                    0,
                    "FULL STACK WEB DEVELOPER",
                    0,
                  ]}
                  speed={50}
                  style={{ fontSize: "1.5em" }}
                  wrapper="div"
                  cursor={false}
                />
              </div>
            )}
          </div>

          {/* Conditional Rendering 2 */}
          {renderNumber === 3 && (
            <div>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "195px",
                  display: "block",
                  fontSize: "1em",
                }}
                sequence={[
                  `I am a\nFull Stack\n Web Developer\nFrom India`,
                  1000,
                ]}
                repeat={Infinity}
                cursor={false}
                speed={50}
              />
            </div>
          )}
        </div>

        {/*Right Section */}
        {/*Right Section */}
        <div className="relative h-auto  flex justify-center items-center">
          {/*bg-image */}
          <div className=" relative w-full h-full">
            <img
              src={backgroundImage}
              alt="img-bg"
              className="w-full h-full object-cover"
            />
          </div>

          {/*My-image */}
          <div className="absolute top-0 left-0 w-full h-full ">
            <img
              src={myImage}
              alt="Divy"
              className="w-full h-full object-cover  absolute rounded-lg"
            />
          </div>

          <img
            src={c}
            alt="C"
            className="absolute w-14 h-14 left-8 bottom-8 animate-moveIcon1"
          />

          <img
            src={js}
            alt="JavaScript"
            className="absolute w-20 h-20 left-8 top-8 animate-facus"
          />

          <img
            src={react1}
            alt="React"
            className="absolute w-20 h-20 right-8 bottom-8 animate-rotate"
          />

          <img
            src={html1}
            alt="HTML"
            className="absolute w-14 h-14  right-11 top-11 animate-moveIcon"
          />
        </div>
      </div>

      {/*About Section */}
      <div className="mx-auto mt-52">
        {/* Heading */}
        <div className=" absolute  left-1/2 -translate-x-32 ">
          {" "}
          <span className=" text-7xl font-extrabold">About Me</span>
        </div>
        <img
          src={arrow}
          alt="arrow"
          className=" absolute w-16 h-16 right-1/3 translate-x-16 translate-y-10"
        ></img>

        <div className=" flex flex-row items-center justify-center gap-12 overflow-y-hidden relative">
          {/*about-Image*/}
          <img
            src={dev}
            alt="developer icon"
            className=" rounded-full  h-1/3 w-1/3"
          ></img>

          {/*Description */}
          <div className=" w-96 overflow-y-hidden">
            <p className=" font-mono text-lg">
              I have a strong foundation in frontend and backend development,
              proficient in React, Node.js, TypeScript, Java, Python, C++, and
              JavaScript. Experienced with SQL and MongoDB, and tools like
              GitHub and Postman, I have built various applications and systems
              utilizing these technologies.
            </p>

            <button className=" bg-cerise-red-500" onClick={handleClick}>
              Contact Me
            </button>
            {isFormVisible && (
              <div
                className=" absolute flex-col top-0 w-1/4 -translate-x-52"
                ref={formRef}
              >
                <ContactUsForm handleSubmitClick={handleSubmitClick} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <div
          className="flex flex-row items-center justify-center gap-3 mb-14"
          ref={animRef}
        >
          <h1
            className={`absolute ${isAnimVisible ? "animate-leftToRight" : ""}`}
          >
            My Skills
          </h1>
          <img
            src={skillArrow}
            alt="arrow-left"
            className={`absolute w-16 ${
              isAnimVisible ? "animate-rightToLeft" : ""
            }`}
          />
        </div>

        <div className=" flex flex-row items-center justify-center gap-40">
          {/*Left List */}
          <div className="flex flex-col gap-6">
            {skill1.map((skill, index) => {
              const skillName = Object.keys(skill)[0];
              const skillLevel = skill[skillName];
              return (
                <div className="flex flex-row gap-9" key={index}>
                  <div className=" w-24">{skillName}</div>
                  <AnimatedStars skillLevel={skillLevel} />
                </div>
              );
            })}
          </div>

          {/*Right List */}
          <div className=" flex flex-col gap-6">
            {skill2.map((skill, index) => {
              const skillName = Object.keys(skill)[0];
              const skillLevel = skill[skillName];
              return (
                <div className="flex flex-row gap-9" key={index}>
                  <div className=" w-24">{skillName}</div>
                  <AnimatedStars skillLevel={skillLevel} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*Projects Section */}
      <div className="w-full mx-auto relative">
        <div className="mt-10 relative w-3/4 mx-auto flex flex-col items-center gap-10">
          {ProjectData.map((data, index) => (
            <div
              key={index}
              className={`relative mx-auto transition-transform ${
                data.left
                  ? "transform -translate-x-10"
                  : "transform translate-x-10"
              }`}
            >
              <ProjectCard
                image={data.image}
                name={data.name}
                left={data.left}
                link={data.link}
              />
            </div>
          ))}
        </div>
      </div>


      {/*Contact Me */}
      <div className=" w-1/2 mx-auto mt-5">
        <h1 className=" translate-x-1/2">Contact Me</h1>
        <ContactUsForm/>
      </div>
    </div>
  );
}

export default Landing;
