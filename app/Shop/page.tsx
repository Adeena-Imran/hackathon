import Header from "@/components/header"
import Image from "next/image"
import Footer from "@/components/footer"

const Pictures=[
    { name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/images/first.png" },
    { name: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            image: "/images/second.png" },
    { name: "Lolito",
                description: "Luxury big sofa", 
                price: "Rp 7.000.000",
                originalPrice: "Rp 14.000.000",
                discount: "-50%", 
                image: "/images/third.png" },
     { name: "Respira",
                    description: "Outdoor bar table and stool", 
                    price: "Rp 500.000", 
                    badge: "New", 
                    image: "/images/fourth.png" },
                    { name: "Grifo", 
                      description: "Night lamp", 
                      price: "Rp 1.500.000", 
                      image: "/images/fifth.png" },
                  { name: "Muggo", 
                      description: "Small mug", 
                      price: "Rp 150.000", 
                      badge: "New", 
                      image: "/images/sixth.png" },
                  { name: "Pingky", 
                      description: "Cute bed set", 
                      price: "Rp 7.000.000", 
                      originalPrice: "Rp 14.000.000", 
                      discount: "-50%", 
                      image: "/images/seventh.png" },
                  { name: "Potty", 
                      description: "Minimalist flower pot", 
                      price: "Rp 500.000", 
                      badge: "New", 
                      image: "/images/eighth.png" },              
]

const Shop=()=>{
    return(
        <div>
            <Header></Header>
            


           <div className="w-full h-auto">
             <Image className="pt-[20px]"
                src={"/images/shop1.png"}
                alt="shop"
                width={1440}
                height={316}
                />

<Image 
                src={"/images/shop2.png"}
                alt="shop"
                width={1440}
                height={100}
              />
           </div>

           <div className="py-10 px-5">
           <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Pictures.map(({ image, name, description, price, originalPrice, discount, badge }, index) => (
          <div key={index} className="relative group border rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-md shadow">Add to cart</button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold">{price}</span>
                {originalPrice && (
                  <span className="text-sm line-through text-gray-400">{originalPrice}</span>
                )}
              </div>
              {discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {discount}
                </span>
              )}
              {badge && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {badge}
                </span>
                )}

            </div>
          </div>
        ))}
       

      </div>


           </div>


           <div className="py-10 px-5">
           <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Pictures.map(({ image, name, description, price, originalPrice, discount, badge }, index) => (
          <div key={index} className="relative group border rounded-lg overflow-hidden">
             <Image className="w-full h-64 object-cover"
                       src={image} 
                       alt={name} 
                       width={285}
                       height={446} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-md shadow">Add to cart</button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold">{price}</span>
                {originalPrice && (
                  <span className="text-sm line-through text-gray-400">{originalPrice}</span>
                )}
              </div>
              {discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {discount}
                </span>
              )}
              {badge && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {badge}
                </span>
                )}

            </div>
          </div>
        ))}
       

      </div>


           </div>


           <div className="flex items-center justify-center space-x-4 mt-4">
  <button
    className="w-10 h-10 flex items-center justify-center rounded-md bg-[#B88E2F] text-white hover:bg-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-yellow-600"
  >
    1
  </button>
  <button
    className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 text-black hover:bg-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-yellow-600"
  >
    2
  </button>
  <button
    className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 text-black hover:bg-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-yellow-600"
  >
    3
  </button>
  <button
    className="w-20 h-10 flex items-center justify-center rounded-md bg-gray-100 text-black hover:bg-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-yellow-600"
  >
    Next
  </button>
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



export default Shop