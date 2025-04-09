const express = require('express');
const path = require('path');
const app = express();

// Cấu hình static files
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/partials', express.static(path.join(__dirname, '../frontend/partials')));

// Route cho các trang
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/index.html'));
});

app.get('/auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/auth/login.html'));
});

// Thêm các route khác tương tự

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});