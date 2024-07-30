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
      <div className='flex flex-col items-center justify-center gap-48 mt-16'>
        <h1>Education</h1>

        <div className='flex flex-col'>

          <div className=' h-24 border-l-2 border-l-white pl-10 flex flex-col  justify-center '>
            <div>B.Tech in Computer Science and Engineering</div>
            <div>SRM Institute of Scince and Technology</div>
            <div>2021-2025</div>
          </div>

          <div className=' bg-pure-greys-300 w-[2px] h-24 '></div>


          <div className=' h-24 border-l-2 border-l-pure-greys-300 pl-10 flex flex-col  justify-center '>
            <div>Class 12</div>
            <div>St. John's School</div>
            <div>2020-2021</div>
          </div>

          <div className=' bg-pure-greys-300 w-[2px] h-24 '></div>

          <div className=' h-24 border-l-2 border-l-pure-greys-300 flex pl-10 flex-col  justify-center'>
            <div>Class 10</div>
            <div>St. John's School</div>
            <div>2018-2019</div>
          </div>


        </div>
      </div>

      {/*Contact Me */}
      <div className=' mt-9 flex flex-col justify-center items-center '>
        <h1>Contact Me</h1>
        <div style={{ width: '40%' }}>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}

export default About;
