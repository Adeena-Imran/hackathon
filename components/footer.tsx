import {Poppins} from "next/font/google"


const poppins= Poppins({subsets:["latin"], weight:['700']})
const pop= Poppins({subsets:["latin"], weight:['400']})


const Footer=()=>{
    return(
        <div className="py-10">
             <div className="w-full my-6">
      <hr className="border-t border-black" />
    </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
               <div>
                <h1 className={`${poppins.className} text-2xl font-bold mb-4` }>
                Funiro
                </h1>
                <p className={`${pop.className} text-sm md:text-base pt-[40px]` }>
                400 University Drive Suite 200 Coral Gables,<br />
                FL 33134 USA</p>
               </div>

               <div>
              <h2 className="text-lg font-bold spaace-y-10 pl-[80px] text-gray-600">Links </h2>
              <ul className="space-y-10 pl-[80px] pt-[59px]">
        <li><a href="#" className="text-black hover:underline">Home</a></li>
        <li><a href="#" className="text-black hover:underline">Shop</a></li>
        <li><a href="#" className=" text-black hover:underline">About</a></li>
        <li><a href="#" className="text-black hover:underline">Contact</a></li>
      </ul>
               </div>
          
          
          <div >
            <h2 className="text-lg font-bold spaace-y-10 pl-[80px] text-gray-600">Help</h2>
            <ul className="space-y-10 pl-[80px] pt-[59px]">
        <li><a href="#" className="text-black hover:underline">Payment Options</a></li>
        <li><a href="#" className="text-black hover:underline">Returns</a></li>
        <li><a href="#" className="text-black hover:underline">Privacy Policies</a></li>
      </ul>
          </div>



          <div >
       
            <h2 className="text-lg font-bold spaace-y-10 pl-[80px] text-gray-600">Newsletter</h2>
            <form className="flex items-center space-x-2">

           
            <input 
          type="email"
          placeholder="Enter Your Email Address"
          className=" px-4 py-2 underline pt-[59px]"
        />
         <button className="px-4 py-2  pt-[59px] text-black underline hover:bg-gray-100">
          Subscribe
        </button>
        
        </form>
          </div>

       
          
          
          
          </div>
          <div className="w-full my-6">
      <hr className="border-t border-black" />
    </div>
             


          <div className="text-left pl-[100px] text-sm text-black mt-4">
    2023 Funiro. All rights reserved
  </div>
           
           
        </div>
    )
}




export default Footer