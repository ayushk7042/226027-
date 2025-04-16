const express = require('express');
const router = express.Router();
const { users, posts, feed } = require('../data/mockData');

// GET top users (sorted by followers)
router.get('/top-users', (req, res) => {
  const top = [...users].sort((a, b) => b.followers - a.followers);
  res.json(top);
});

// GET trending posts (sorted by likes)
router.get('/trending-posts', (req, res) => {
  const trending = [...posts].sort((a, b) => b.likes - a.likes);
  res.json(trending);
});

// GET feed (recent posts)
router.get('/feed', (req, res) => {
  res.json(feed);
});

module.exports = router;