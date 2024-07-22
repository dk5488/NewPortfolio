import { useState } from "react";
import { link as links} from "../data/links";

function Navbar() {
  return (
    <div className="flex h-auto flex-row-reverse gap-3 overflow-x-hidden">
      {links.map((link, index) => (
        link==="."?(
          <div key={index} className="p-3 mr-3">
            <a href="/">Home</a>
        </div>
        ):(
          <div key={index} className="p-3">
          <a href={"/" + link}>{link}</a>
        </div>
        )
        
      ))}
    </div>
  );
}

export default Navbar;
