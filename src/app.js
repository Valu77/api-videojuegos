import express, { json } from 'express';
import gameRoutes from './routes/gameRoutes';

const app = express();
const PORT = 3000;

app.use(json());

// Usar las rutas
app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});