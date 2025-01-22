import Image from "next/image";
import {Poppins} from "next/font/google"
import React from "react";

const poppins= Poppins({subsets:["latin"], weight:['700']})
const pop= Poppins({subsets:["latin"], weight:['400']})


const Herosec=()=>{
    return(
        <div className="relative w-full">
            <Image className="w-full object-cover pt-[95.7px] "
                    src={"/images/Mask Group.jpg"}
                    alt="next_image"
                    width={1440}
                    height={716.83}/>
          <div className="text-center pt-[49px]">
          <h1 className={`${poppins.className} sm:text-5xl md:text-4xl text-2xl` }>
        Browse The Range
        <p className={`${pop.className} text-sm md:text-base` }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        </h1>
            </div>  
        
        <div className="grid grid-cols-3  gap-2 p-2">
        <div>
        <Image 
                    src={"/images/1 pic.png"}
                    alt="next_image"
                    width={381}
                    height={480}
                    className="w-full h-auto"/>
                    <p className="text-center font-bold">Dining</p>
        </div>
       
        <div>
        <Image 
                    src={"/images/2 pic.png"}
                    alt="next_image"
                    width={381}
                    height={480}
                    title={"Living"}
                    className="w-full h-auto"/>
                     <p className="text-center font-bold">Living</p>
            </div>     
        
            
        <div>
        <Image
                src={"/images/3 pic.png"}
                alt="next_image"
                width={381}
                height={480}
                className="w-full h-auto"/>
                 <p className="text-center font-bold">Bedroom</p>
            </div>    
       
        </div>
     <div className="text-center pt-[80px]">
        <p className=" font-bold sm:text-4xl text-3xl">
            Our Products
        </p>
        
        </div>

     </div>
    )
}




export default Herosec