import React from 'react';
import Image from 'next/image';

const Page = () => {
  const products = [
    {
      id: 1,
      name: "Tea Tree Shampoo",
      description: "Refreshing scalp cleanser with natural tea tree oil that helps remove buildup and soothe irritation. Perfect for daily use on all hair types.",
      price: 24.99,
      quantity: "250ml",
      features: ["Natural tea tree oil", "Sulfate-free formula", "For all hair types", "Cruelty-free"],
      image: "https://images.unsplash.com/photo-1604368640692-027f44ffb8cf?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      imageDimensions: { width: 800, height: 1000 } // Actual image dimensions
    },
    {
      id: 2,
      name: "Sandalwood Conditioner",
      description: "Nourishing hair treatment with exotic sandalwood oil that deeply conditions while providing a luxurious masculine fragrance.",
      price: 28.99,
      quantity: "200ml",
      features: ["Sandalwood essential oil", "Argan oil enriched", "Color-safe formula", "Vegan ingredients"],
      image: "https://images.unsplash.com/photo-1590509294910-32752e061399?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyYmVyJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      imageDimensions: { width: 800, height: 800 }
    },
    {
      id: 3,
      name: "Peppermint Shave Balm",
      description: "Cooling post-shave treatment with peppermint oil that reduces irritation and leaves skin feeling refreshed and hydrated.",
      price: 32.99,
      quantity: "100ml",
      features: ["Peppermint essential oil", "Aloe vera enriched", "Alcohol-free", "Soothing formula"],
      image: "https://images.unsplash.com/photo-1571865755943-ce31f1743cff?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlciUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
      imageDimensions: { width: 800, height: 800 }
    },
  ];

  return (
    <div className='flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 bg-gray-50 min-h-screen'>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-amber-500">New Products</span>
      </h1>
      
      <div className="grid grid-cols-1 gap-12">
        {products.map((product) => {
          const aspectRatio = product.imageDimensions.width / product.imageDimensions.height;
          const imageHeight = Math.min(600, 600 / aspectRatio);
          
          return (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Product Image - Full width, uncropped */}
              <div className="w-full flex justify-center bg-gray-100 p-8">
                <div 
                  className="relative"
                  style={{ 
                    width: `${imageHeight * aspectRatio}px`,
                    height: `${imageHeight}px`,
                    maxWidth: '100%'
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                    <span className="ml-2 text-gray-500">/ {product.quantity}</span>
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                      Add to Cart
                    </button>
                    <button className="flex-1 sm:flex-none border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;