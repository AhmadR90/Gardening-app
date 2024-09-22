import React from 'react';

const reviews = [
  {
    id: 1,
    name: "LOLA MILES",
    message: "Absolutely love my new garden! The team was professional and did an amazing job.",
    imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2021/03/0001_Calque-4.png" 
  },
  {
    id: 2,
    name: "MIKE KENLI",
    message: "Their landscaping service transformed my backyard. Highly recommend!",
    imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2021/03/t-6.png" // Replace with actual image URL
  },
  {
    id: 3,
    name: "Catherine Lee",
    message: "Great attention to detail and excellent customer service.",
    imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2021/03/t1.png" // Replace with actual image URL
  },
  {
    id: 4,
    name: "David Brown",
    message: "The team was punctual and their work was top-notch. I couldn't be happier!",
    imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2021/03/p7.png" // Replace with actual image URL
  },
  {
    id: 5,
    name: "Eva Green",
    message: "I appreciate their eco-friendly practices. My garden has never looked better!",
    imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2021/03/t-2.png" // Replace with actual image URL
  },
  {
    id: 6,
    name: "Frank White",
    message: "Very knowledgeable and helpful team. They brought my vision to life!",
    imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2021/03/t-5.png" // Replace with actual image URL
  },
];

const ClientReviews = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
      <h2 className="text-2xl font-bold text-center mb-6">Our Client Reviews</h2>
      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="flex items-start p-4 border-b">
            <img
              src={review.imageUrl}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-600">{review.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
