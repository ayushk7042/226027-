const express = require('express');
const cors = require('cors');
const analyticsRoutes = require('./routes/analytics');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', analyticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));