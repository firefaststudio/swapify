const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 54321;

app.use(cors());

app.get('/listings', (req, res) => {
  res.json([
    { id: 1, name: 'iPhone 13', category: 'Electronics' },
    { id: 2, name: 'Cuffie Sony WH-1000XM4', category: 'Accessories' },
    { id: 3, name: 'Giacca North Face', category: 'Clothing' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`);
});
