import React from "react";
import { TypeAnimation } from "react-type-animation";

function Landing() {
  return (
    <div className=" w-full py-5">
      {/*Hero Section */}
      <div className=" mx-auto relative flex flex-row">
        {/*Left Section */}
        <div className="flex flex-col gap-3 font-black">
          <div>
            <TypeAnimation
              sequence={["Divy",
               1000,
               "Prakash",
               1000,
               "Pandey",
               1000,
               ""]}
              repeat={Infinity}
              speed={50}
              style={{ fontSize: '2em' }}
            />
          </div>
          <div></div>
          <div></div>
        </div>

        {/*Right Section */}
        <div></div>
      </div>
    </div>
  );
}

export default Landing;
