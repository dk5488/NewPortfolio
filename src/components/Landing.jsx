import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../assets/blob1.png";
import myImage from "../assets/my-img.png";
import c from "../assets/c.png";
import node from "../assets/node.png";
import js from "../assets/js.png";
import react1 from "../assets/react.png";
import html1 from "../assets/html.png";
import code from "../assets/coding.png"

function Landing() {
  const [renderNumber, setRenderNumber] = useState(1);
  const typeAnimRef = useRef(null);

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

  return (
    <div className="w-full py-5">
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
        <div className="relative h-auto overflow-hidden flex justify-center items-center">
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


          <img src={c} alt="C" className="absolute w-10 h-10 animate-moveIcon left-1 top-2"   />          
          <img className="absolute top-0 right-0  w-10" src={node} alt="C++"></img>
          <img className="absolute bottom-0 left-0  w-10" src={js} alt="C++"></img>
          <img className="absolute bottom-0 right-0  w-10" src={react1} alt="C++"></img>
          <img className="absolute top-0 left-1/2  w-10" src={html1} alt="C++"></img>
          <img className="absolute bottom-0 left-1/2  w-10" src={code} alt="C++"></img>

        </div>
      </div>
    </div>
  );
}

export default Landing;
