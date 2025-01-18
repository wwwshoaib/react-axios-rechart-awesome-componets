
import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
    ];

    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-yellow-200">

            <div className="md:hidden" onClick={() => setOpen(!open)}> {
                open === true ? <IoClose className="text-xl md:text-2xl " />:   <FiMenu className="text-xl md:text-2xl " />
                }
          
            </div>

        
            <ul className= {`md:flex duration-1000 absolute md:static ${open? 'left-0': '-left-60'} bg-yellow-200 p-5  `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>


        </nav>
    );
};

export default NavBar;