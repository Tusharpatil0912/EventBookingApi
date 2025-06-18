const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ status: false, message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  res.json({ status: true, message: 'Login successful', data: { token: 'Bearer ' + token } });
};
