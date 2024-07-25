require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes');
const pendudukRoutes = require('./routes/pendudukRoutes');
const dataPendudukRoutes = require('./routes/dataPendudukRoutes');
const aduanRoutes = require('./routes/aduanRoutes');
const beritaRoutes = require('./routes/beritaRoutes');
const kelolaBeritaRoutes = require('./routes/kelolaBeritaRoutes');
const userRoutes = require('./routes/userRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));

// Routes yang tidak memerlukan autentikasi
app.use('/api/datapenduduks', dataPendudukRoutes);
app.use('/api/aduans', aduanRoutes);
app.use('/api/beritas', beritaRoutes);

// Routes yang memerlukan autentikasi
app.use('/api/admins', adminRoutes);
app.use('/api/penduduks', pendudukRoutes);
app.use('/api/kelolaBeritas', kelolaBeritaRoutes);
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://azimatulchamidah:azimatul17@dpsi.vshwldc.mongodb.net/?retryWrites=true&w=majority&appName=dpsi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Connection error', err);
});

console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);
// File pembuatan token
console.log('Signing Secret:', process.env.ACCESS_TOKEN_SECRET);
// File verifikasi token
console.log('Verification Secret:', process.env.ACCESS_TOKEN_SECRET);

