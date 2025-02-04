const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json()); // لتحليل JSON في الطلبات
app.use(cors()); // لتمكين الطلبات من الواجهة الأمامية

// بيانات مستخدمين وهمية (بدلاً من قاعدة بيانات حقيقية)
const users = [
  { id: 1, email: "admin@yougpt.com", password: "123456", balance: 150 },
  { id: 2, email: "user@example.com", password: "password", balance: 200 },
];

// تسجيل الدخول
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // البحث عن المستخدم في البيانات الوهمية
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: "Connexion réussie!", user });
  } else {
    res.status(401).json({ success: false, message: "Email ou mot de passe incorrect !" });
  }
});

// تشغيل الخادم
const PORT = 3000;
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});
