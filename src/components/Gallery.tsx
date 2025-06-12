import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "TEA TREE SHAMPOO",
      description: "Refreshing and invigorating scalp treatment",
      image: "https://images.unsplash.com/photo-1629881543350-9c14f791df99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVyJTIwc2hvcHN8ZW58MHx8MHx8fDA%3D" // Replace with your image path
    },
    {
      id: 2,
      name: "SANDALWOOD CONDITIONER",
      description: "Nourishing and aromatic hair care",
      image: "https://images.unsplash.com/photo-1629881543350-9c14f791df99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVyJTIwc2hvcHN8ZW58MHx8MHx8fDA%3D" // Replace with your image path
    },
    {
      id: 3,
      name: "PEPPERMINT BALM",
      description: "Cooling after-shave treatment",
      image: "https://images.unsplash.com/photo-1629881544138-c45fc917eb81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlciUyMHNob3BzfGVufDB8fDB8fHww" // Replace with your image path
    },
    {
      id: 4,
      name: "CEDARWOOD CREAM",
      description: "Rich moisturizing facial cream",
      image: "https://images.unsplash.com/photo-1629881544138-c45fc917eb81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlciUyMHNob3BzfGVufDB8fDB8fHww" // Replace with your image path
    }
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-wider">
          THE GENTLEMAN&apos;S
        </h2>
        <p className="text-center text-gray-600 mb-12 uppercase text-sm tracking-widest">
          Premium Grooming Essentials
        </p>
        
        <Slider {...settings} className="px-4">
          {products.map((product) => (
            <div key={product.id} className="px-4">
              <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl"
                  />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;