'use client';
import { useState } from 'react';
import Image from 'next/image';



const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    
    

    try {
      const query = encodeURIComponent(`*[type==product && name match "${searchQuery}"]`);
      const response = await fetch(`https://template6-six.vercel.app/api/products?query=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const result = await response.json();
      console.log(result)
      const filteredResults = result.filter((product: any) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ); 

      setSearchResults(filteredResults);
      console.log('Filtered Results:', filteredResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
      alert('An error occurred while searching. Please try again later.');
    }
  };

  
  return (
    <div className="relative">
     
      <button
        onClick={() => setIsSearchOpen((prev) => !prev)}
        aria-label="Toggle search"
        className="focus:outline-none"
      >
        <Image
          src="/images/search.png"
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer w-6 h-6"
        />
      </button>

    
      {isSearchOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-[200px] h-[400px] p-4 z-50">
          <form onSubmit={handleSearch} className="flex flex-col space-y-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]  w-full"
            />
            <button
              type="submit"
              className="bg-[#B88E2F]  text-white px-4 py-2 rounded-md  transition-all"
            >
              Search
            </button>
          </form>

       
          {searchResults.length > 0 ? (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Results:</h3>
              <ul className="space-y-4">
                {searchResults.map((product: any, index: number) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Image
                      src={product.imageUrl} 
                      alt={product.title}
                      width={24}
                      height={24}

                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className='bg-white shadow-md rounded p-4 '>
                      <p className="font-medium">{product.title}</p>
                      
  <p className="text-sm text-gray-500 max-w-[90px] truncate overflow-auto ">
    {product.description}
  </p>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            searchQuery && (
              <p className="mt-4 text-sm text-gray-500">No results .</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
