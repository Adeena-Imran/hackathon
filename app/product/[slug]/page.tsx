


import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ _id: string }>;
}

async function getProduct(_id: string): Promise<Product> {
  return client.fetch(
    groq` *[type==product ][0] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl" : productImage.asset->url,
        tags
      }`,
      {_id}
  
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { _id } = await params;
  const product = await getProduct(_id);

  return (
    <div key={product._id} className="px-4 md:px-8 py-8">
      
      <h1 className="text-4xl font-bold text-center mb-8">{product.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        
        <div className="flex justify-center mb-8 md:mb-0">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.title || "Product image"}
              width={300}
              height={300}
              className="rounded-lg shadow-md w-full max-w-md" 
            />
          )}
        </div>

        
        <div className="flex flex-col justify-start gap-6">
          <p className="text-sm text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-emerald-500">${product.price}</p>
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
      </div>
    </div>
  );
}









