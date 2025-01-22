'use client';
import  React, {useEffect, useState} from "react";
import  sanityClient  from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity= sanityClient ({
    projectId:"10oci7bp",
    dataset:"production",
    apiVersion:"2025-01-13",
    useCdn:true,
});




interface Product {
    _id: string;
    title:string;
    price:number;
    description:string;
    discountPercentage:number;
    imageUrl:string;
    productImage:{
        asset:{
            _ref:string;
        };
    };
    tags:string[];
    slug:{
        _type:"slug"
        current:string;
    };
}


const ProductCards: React.FC=()=>{
    const[products, setProducts] = useState<Product[]>([]);
    const [cart, setCart]= useState<Product[]>([]);

    const fetchProducts=async ()=>{
        try{
            const query=`
            *[type==product && defined(title) && defined(price)] {
            _id,
            title,
            price,
            description,
            discountPercentage,
            "imageUrl" : productImage.asset->url,
          
            tags
            }`;
           
            const data= await sanity.fetch(query);
            setProducts(data);

        } catch (error) {
            console.error("Error Fetching Products:", error);
        }
    };


    const addToCart=(product:Product)=>{
        setCart((prevCart)=>[...prevCart, product]);
        alert(`${product.title}has been added to your cart!`);
    };

        
    const truncateDescription = (description: string | null | undefined): string => {
        if (!description) {
          
          return "No description available";
        }
      
        
        return description.length > 100
          ? description.substring(0, 100) + "..."
          : description;
      };
      

    useEffect(()=>{
        fetchProducts();
    }, []);

    
      
   

    return(
        <div className="p-4">
            <h1 className="text-center text-2xl font-bold text-black mt-4 mb-4">Products from API's Data </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) =>(
                <div 
                key={product._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <Link href ={`/product/${product.slug?.current}`}>
                     <Image
  src={product.imageUrl || '/placeholder-image.png'}
  alt={product.title || 'Product image'}
  width={300}
  height={300}
  className="w-full h-48 object-cover rounded-md"
/>


                    <div className="mt-4">
                        <h2 className="text-lg    font-semibold">{product.title}</h2>
                        <p className="text-gray-500 mt-2    text-sm">{truncateDescription(product.description)}</p>
                        <div className="flex justify-between item-center mt-4">
                            <div>
                                <p className="text-emerald-500 font-bold">${product.price}</p>
                                {product.discountPercentage > 0 && (
                                    <p className="text-sm text-emerald-700">{product.discountPercentage}% OFF</p>
                                )}
                            </div>

                        </div>
                        



                        <div className="mt-2 flex flex-wrap gap-2">
                            {product?.tags?.map((tags, index)=>(
                                <span  key={index}
                                className="text-xs bg-gray-200  rounded-lg text-gray-700   x-2 py-1">
                                    {tags}
                                   
                                </span>
                            )
                        )}
                        </div>

                        </div>
                        </Link>


                        <div>
                            {/* {Add to cart Function} */}

                        <button className="mt-4 w-full bg-[#B88E2F]  text-white rounded-md hover:bg-orange"
                        onClick={()=>addToCart(product)}> Add To Cart

                        </button>

                        </div>
   

                </div>
            ))}

            </div>

    {/* {cart summary} */}

            <div className="mt-8 bg-green p-6 rounded-lg shadow-md">
                <h2 className="text-yellow font-bold text-lg"> Cart Summary </h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index)=>(
                            <li
                            key={index}
                            className="flex justify-between item-center bg-white shadow-sm p-4 rounded-md">
                                <div>
                                    <p className="font-medium text-blue">{item.title}</p>
                                    <p className="text-sm text-orange">${item.price.toFixed(2)}</p>
                                </div>

                       <Image
                       src={item.imageUrl || '/placeholder-image.png'}
                       alt={item.title || 'Product image'}
                       width={50}
                       height={50}
                       className="rounded-md "/>         

                            </li>
                        ))} </ul>

                ):(
                    <p className="text-yellow text-center">Your Cart Is Empty</p>
                )
            }

            </div>

        </div>
    )
}




export default ProductCards