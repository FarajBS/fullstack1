import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import articleR from './routes/articleR.js';
import blogR from './routes/blogR.js';
// import userR from './routes/userR.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', articleR);
app.use('/api', blogR);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error:', err));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});