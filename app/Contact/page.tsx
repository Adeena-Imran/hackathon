import Image from "next/image";
import Header from "@/components/header";
import {Poppins} from "next/font/google"
import Footer from "@/components/footer";


const Popsix= Poppins({subsets:["latin"], weight:['600']})
const pop= Poppins({subsets:["latin"], weight:['400']})

const Contact=()=>{
    return(
        <div>
        <Header></Header>

        <Image className="pt-[20px] w-full h-auto"
                        src={"/images/Group 78.png"}
                        alt="shop"
                        width={1440}
                        height={316}
                     />
        <div>
            <h1  className={`${Popsix.className} sm:text-2xl md:text-3xl text-2xl text-center pt-[150px]` }>
                Get In Touch With Us

            </h1>
            <p  className={`${pop.className} text-center text-sm` }> 
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br/>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!

            </p>


            <div className="flex flex-wrap justify-between items-start   md:p-12">
     
     <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
       <div className="flex items-start space-x-4">
         <span className="text-xl text-yellow-600">
          
         </span>
         <div>
           <h4 className="font-bold text-lg">Address</h4>
           <p className="text-gray-500">
             236 5th SE Avenue, New York NY10000, United States
           </p>
         </div>
       </div>
       <div className="flex items-start space-x-4">
         <span className="text-xl text-yellow-600">
          
         </span>
         <div>
           <h4 className="font-bold text-lg">Phone</h4>
           <p className="text-gray-500">
             Mobile: +(84) 546-6789 <br />
             Hotline: +(84) 456-6789
           </p>
         </div>
       </div>
       <div className="flex items-start space-x-4">
         <span className="text-xl text-yellow-600">
       
         </span>
         <div>
           <h4 className="font-bold text-lg">Working Time</h4>
           <p className="text-gray-500">
             Monday-Friday: 9:00 - 22:00 <br />
             Saturday-Sunday: 9:00 - 21:00
           </p>
         </div>
       </div>
     </div>

   
     <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
       <div>
         <label className="block text-balck font-bold mb-2">Your name</label>
         <input
           type="text"
           placeholder="Abc"
           className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
         />
       </div>
       <div>
         <label className="block text-black font-bold mb-2">Email address</label>
         <input
           type="email"
           placeholder="Abc@def.com"
           className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
         />
       </div>
       <div>
         <label className="block text-black font-bold mb-2">Subject</label>
         <input
           type="text"
           placeholder="This is an optional"
           className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
         />
       </div>
       <div>
         <label className="block text-black font-bold mb-2">Message</label>
         <textarea
           
           placeholder="Hi! I'd like to ask about"
           className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
         ></textarea>
       </div>
       <button className="w-full bg-[#B88E2F]  text-white font-bold py-3  rounded-md hover:bg-yellow-500">
         Submit
       </button>
     </div>
   </div>
            </div>    
            
                  <div>
                  <Image className="justify-between pt-[100px]   "
                            src={"/images/Frame 161.png"}
                            alt="shop"
                            width={1440}
                            height={270}
                            layout="responsive"/>
            
            
                  </div> 
                  <Footer></Footer>           



        </div>
    )
}




export default Contact