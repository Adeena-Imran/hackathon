import React from "react";
import Link from "next/link";

function Header(){
    return(
        <div className="width-[1440px] height-[100px] ">
            <div className="width-[1286px] height-[41px] Gap-[5px] mt-[29px] pl-[54px] pr-[54px] flex justify-between items-center ">
            <img src="/images/Frame 168.png " width={'185px'} height={'41px'} />
            <nav className="flex space-x-20 justify-space-between">
                <a href ="Home">Home</a>
                <a href ="Shop">Shop</a>
                <a href ="Blog">Blog</a>
                <a href ="Contact">Contact</a>

            </nav>
            </div>
             
            


        </div>
    )
}



export default Header