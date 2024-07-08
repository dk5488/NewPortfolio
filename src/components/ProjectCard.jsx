

function ProjectCard({key,image,name,left,link}){
    const Image=image
    const Name=name
    const Left=left
    const Link=link


    return(
        <div className={`flex flex-row relative w-auto  gap-28`}>
           <a href={Link} target="_blank">
            <img src={Image} alt="Project" className="w-52"/>
           </a>
           <h1 className=" w-14">{Name}</h1>
        </div>
    )

}

export default ProjectCard