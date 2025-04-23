import React from 'react';
import './Fblogs.css';

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1666770709657-76a9d1d80b51?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The Secret Behind Perfect Pasta',
    excerpt: 'Discover how to make pasta like a true Italian with this simple guide to ingredients and technique.',
    author: 'Chef Luca',
    date: 'April 20, 2025'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1676502373684-ea0fe617c2f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Build the Ultimate Burger Stack',
    excerpt: 'Layer by layer, learn the science of constructing the most mouth-watering burger.',
    author: 'Grill Master G',
    date: 'April 19, 2025'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1659354219145-dedd2324698e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desserts That Steal the Show',
    excerpt: 'Top 5 desserts you can whip up quickly to impress at your next dinner party.',
    author: 'Sweetie T.',
    date: 'April 18, 2025'
  }
];

const Fblogs = () => {
  return (
    <div className="fblog-section">
      <h2>Tasty Reads</h2>
      <div className="fblog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="fblog-card">
            <img src={post.image} alt={post.title} />
            <div className="fblog-content">
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
              <div className="fblog-meta">
                <span>{post.author}</span> • <span>{post.date}</span>
              </div>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fblogs;
