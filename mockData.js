const users = [
    { id: 1, name: 'Alice', followers: 120 },
    { id: 2, name: 'Bob', followers: 300 },
    { id: 3, name: 'Charlie', followers: 280 },
  ];
  
  const posts = [
    { id: 1, caption: 'Exciting day!', likes: 150, userId: 1, comments: 20 },
    { id: 2, caption: 'Great vibes only.', likes: 190, userId: 2, comments: 25 },
    { id: 3, caption: 'Adventure time!', likes: 220, userId: 3, comments: 30 },
  ];
  
  const feed = posts.map(post => {
    const user = users.find(u => u.id === post.userId);
    return {
      ...post,
      username: user.name,
    };
  });
  
  module.exports = { users, posts, feed };