import React from 'react';
import ContactUsForm from "../components/ContactUsForm";
import dpppppp from "../assets/dpppppp.jpg";
import dwnld from "../assets/dwnld.gif"
function About() {
  return (
    <div>
      {/*Hero Section */}
      <div className='flex flex-row gap-8 items-center justify-center'>
        <img src={dpppppp} alt='dp-1'/>
        <div className=' flex flex-col gap-3'>
           <h1>Divy Prakash Pandey</h1>
           <h2>Full Stack Web Developer</h2>
           <button className=' flex flex-row'>Resume<span><img src={dwnld} alt='download-icon'  className=" w-10 h-10"/></span></button>
        </div>
      </div>

      {/* Education */}
      <div>
        <h1>Education</h1>

        <div>

          <div>
            <div>B.Tech in Computer Science and Engineering</div>
            <div>SRM Institute of Scince and Technology</div>
            <div>2021-2025</div>
          </div>


          <div>
            <div>Class 12</div>
            <div>St. John's School</div>
            <div>2020-2021</div>
          </div>

          <div>
            <div>Class 10</div>
            <div>St. John's School</div>
            <div>2018-2019</div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default About;
