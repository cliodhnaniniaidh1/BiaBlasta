import logo from '../../images/sample.png';
import Image from 'next/image'
import React from "react";
import { navLinks } from "../data";
import Link from "next/link"

function HeaderComponent(){
    return(
        <header>
            <div className="header">
            <Image src={logo} alt="Bia Blasta logo" height={100}/>
            </div>
            <div className="nav">
                <nav>
                    {navLinks.map((link, index) => {
                    return (
                        <ul>
                        <Link href={link.path}>
                            <li key={index}>{link.name}</li>
                        </Link>
                        </ul>
                    );
                    })}
                </nav>
            </div>
        </header>
       
    )
  }
  
  export default HeaderComponent;
