const port = 3001;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Thinkquiry listening at http://localhost:${port}`);
});

// 404 handler
app.use((req, res) => res.status(404).json({ err: 'Page not found!' }));
