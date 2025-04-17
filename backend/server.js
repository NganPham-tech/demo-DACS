const express = require('express');
const path = require('path');
const app = express();

// Cấu hình static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Route cho các trang
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/index.html'));
});

app.get('/auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/auth/login.html'));
});

// Trang danh sách flashcard
app.get('/flashcard/list', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/flashcard/list.html'));
});

// Trang tạo flashcard
app.get('/flashcard/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/flashcard/create.html'));
});

// Thêm các route khác tương tự

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên  ${PORT}`);
});
