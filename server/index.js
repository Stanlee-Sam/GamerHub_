import express from 'express';
import { config } from 'dotenv'
import usersRoute from './routes/users.routes.js'
config()
const app = express ();

app.use('/api/users', usersRoute)
app.listen (4000, () => {
    console.log ('Server is running on port 4000');
});