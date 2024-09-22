import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Starting Your Garden",
      image: "https://yard.oceanwp.org/wp-content/uploads/2021/02/0004_shutterstock_384426322.png",
      description: "Learn the basics of starting your own garden, including choosing the right location and soil.",
    },
    {
      id: 2,
      title: "Top 5 Indoor Plants",
      image: "https://yard.oceanwp.org/wp-content/uploads/2021/02/0005_shutterstock_380327731.png",
      description: "Discover the best indoor plants that are easy to care for and can thrive in your home.",
    },
    {
      id: 3,
      title: "Organic Pest Control",
      image: "https://yard.oceanwp.org/wp-content/uploads/2021/02/0003_shutterstock_1029370291.png",
      description: "Explore natural methods to keep pests away from your garden without harmful chemicals.",
    },
    {
      id: 4,
      title: "Seasonal Gardening Tips",
      image: "https://yard.oceanwp.org/wp-content/uploads/2021/02/0002_shutterstock_287707931.png",
      description: "Find out what to plant each season for a bountiful harvest.",
    },
    {
      id: 5,
      title: "Herb Gardening 101",
      image: "https://yard.oceanwp.org/wp-content/uploads/2021/02/0001_shutterstock_380327803.png",
      description: "A beginner's guide to growing your own herbs at home.",
    },
    {
      id: 6,
      title: "Sustainable Gardening Practices",
      image: "https://yard.oceanwp.org/wp-content/uploads/2021/02/0000_shutterstock_1054297805.jpg-1.png",
      description: "Learn how to make your garden more eco-friendly.",
    },
    {
      id: 7,
      title: "Planting Flowers for Pollinators",
      image: "https://i.pinimg.com/474x/c9/45/6f/c9456f7c4964c7916ff07d60b6d83699.jpg",
      description: "Find out which flowers attract bees and butterflies.",
    },
    {
      id: 8,
      title: "Vegetable Gardening for Beginners",
      image: "https://i.pinimg.com/474x/56/62/07/566207ae429c02fb86e7996363f5f887.jpg",
      description: "Tips and tricks for starting your first vegetable garden.",
    },
    {
      id: 9,
      title: "Garden Design Ideas",
      image: "https://i.pinimg.com/474x/61/55/30/615530240b01c37fe5a737b1b3ea62d3.jpg",
      description: "Get inspired with creative garden design ideas.",
    },
    {
      id: 10,
      title: "Composting Basics",
      image: "https://i.pinimg.com/474x/4d/c4/55/4dc4554b4c2427d2f5ebbc42de5af17b.jpg",
      description: "Learn how to create your own compost to enrich your garden soil.",
    },
    {
      id: 11,
      title: "Composting Basics",
      image: "https://i.pinimg.com/474x/b3/ab/b5/b3abb504fd5ffd7fa8269a7c41f028dd.jpg",
      description: "Learn how to create your own compost to enrich your garden soil.",
    },
    {
      id: 12,
      title: "Composting Basics",
      image: "https://i.pinimg.com/474x/94/44/6a/94446aed6dbfa554a279d10f4b8ade2c.jpg",
      description: "Learn how to create your own compost to enrich your garden soil.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 ">Gardening Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-2">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
