import React from "react";
import { ProjectPageData } from "../data/projectPageData";
import ProjectPageGrid from "./projectPageGrid";

function Projects() {
  return (
    <div className=" overflow-x-hidden max-w-full">
      {/*Project Section */}
      <div>
        {/* Project Page title*/}

        <div >
          <h1>Projects</h1>
          <span>Project List</span>
        </div>

        {/*Project Grid*/}
        <div className="w-5/6 mx-auto translate-x-14">
          <div className="grid grid-cols-2 gap-16 items-center justify-center mx-auto translate-x-20" >
            {ProjectPageData.map((index, key) => (
              <ProjectPageGrid
                imager={index.image}
                name={index.name}
                link={index.link}
                desc={index.desc}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
