const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = require('./config');
const verifyToken = require('./middleware/auth');

const authRoutes = require('./routes/auth.routes');
const matchesRoutes = require('./routes/matches.routes');
const groupsRoutes = require('./routes/groups.routes');
const teamsRoutes = require('./routes/teams.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'API Mundial — usa POST /api/auth/login para obtener tu token' });
});

// Ruta pública: aquí se obtiene el token
app.use('/api/auth', authRoutes);

// A partir de aquí, todas las rutas requieren un JWT válido
app.use('/api/matches', verifyToken, matchesRoutes);
app.use('/api/groups', verifyToken, groupsRoutes);
app.use('/api/teams', verifyToken, teamsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = app;
