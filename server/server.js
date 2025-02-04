const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // تحقق من البيانات (سيتم إضافة المنطق لاحقًا)
  if (email === "admin@yougpt.com" && password === "123456") {
    res.json({ success: true, redirect: "admin.html" });
  } else {
    res.json({ success: false, message: "Email ou mot de passe incorrect !" });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});
