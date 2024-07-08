

function ProjectCard({key,image,name,left,link}){
    const Image=image
    const Name=name
    const Left=left
    const Link=link


    return(
        <div className={`flex flex-row relative w-auto ${Left?'left-0':'right-0'}`}>
           <a href={Link}>
            <img src={Image} alt="Project" className="w-52"/>
           </a>
           <h1>{Name}</h1>
        </div>
    )

}

export default ProjectCard