import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function Landing() {
  const [renderNumber, setRenderNumber] = useState(1);
  const typeAnimRef = useRef(null);

  useEffect(() => {
    // This effect now runs on the FIRST render AND when renderNumber changes
    if (renderNumber === 1) {
      const timer = setTimeout(() => {
        setRenderNumber(2);
      }, 4000);

      return () => clearTimeout(timer);
    }

    if (renderNumber === 2) {
      const timer = setTimeout(() => {
        setRenderNumber(3);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [renderNumber]);

  return (
    <div className="w-full py-5">
      <div className="mx-auto relative flex flex-row">
        <div className="flex flex-col gap-3 font-black">
          <div>
            <TypeAnimation
              ref={typeAnimRef}
              sequence={[
                "Divy",
                1000,
                "Divy Prakash",
                1000,
                "Divy Prakash Pandey",
                1000, // Display for 1 second
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              wrapper="div"
              deletionSpeed={Infinity}
            />
          </div>

          {/* Conditional Rendering 1 */}
          {renderNumber >= 2 && (
            <div>
              <TypeAnimation
                
                sequence={[
                  "FULL",
                  1000,
                  "FULL STACK",
                  1000,
                  "FULL STACK WEB DEVELOPER",
                  1000, // Display for 1 second
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                wrapper="div"
                
              />
            </div>
          )}

          {/* Conditional Rendering 2 */}
          {renderNumber === 3 && (
            <div>
              <TypeAnimation
                
                sequence={[
                  `I am a\nFull Stack Developer\nand I work remotely\nfrom India`,
                  1000,
                  "",
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                wrapper="div"
                
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
