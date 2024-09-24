import React from 'react';

const  Store = () => {
  const products = [
    {
      id: 1,
      name: "Awesome Product 1",
      description: "This is a brief description of the awesome product 1.",
      rating: 4.5,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/SUCHA30287.png"
    },
    {
      id: 2,
      name: "Awesome Product 2",
      description: "This is a brief description of the awesome product 2.",
      rating: 3.8,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/590435.png"
    },
    {
      id: 3,
      name: "Awesome Product 3",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/590404.png"
    },
    {
      id: 4,
      name: "Awesome Product 4",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/592745.png"
    },
    {
      id: 5,
      name: "Awesome Product 5",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/592288B.png"
    },
    {
      id: 6,
      name: "Awesome Product 6",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/599624.png"
    },
    {
      id: 7,
      name: "Awesome Product 7",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/592489B.png"
    },
    {
      id: 8,
      name: "Awesome Product 8",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/505308A.png"
    },
    {
      id: 9,
      name: "Awesome Product 9",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/784638B.png"
    },
    {
      id: 10,
      name: "Awesome Product 10",
      description: "This is a brief description of the awesome product 3.",
      rating: 4.0,
      image: "https://yard.oceanwp.org/wp-content/uploads/2016/08/590436.png"
    },
  ];

  return (
    <>
    <div className='flex justify-center font-serif '>
    <h1 className='text-4xl my-8 '>Available products</h1>
    </div>
   
    <div className="flex flex-wrap justify-center items-center  bg-gray-100 p-4 hover:shadow-slate-700">
      
      {products.map(product => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
          <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
          <div className="py-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {'★'.repeat(Math.round(product.rating))}
                {'☆'.repeat(5 - Math.round(product.rating))}
              </span>
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <button className=" ml-24 w-50% bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Store;
