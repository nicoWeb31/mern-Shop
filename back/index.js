import app from './app.js';
// import connectDB from './config/bd.js'
import dotenv from 'dotenv';
import colors from 'colors';//colorConsole
import bdd from './config/db.js';

dotenv.config();


//____________________________MONGODB CONNECT_________________________________
// connectDB();
bdd();
//_____________________________________________________________________________






//server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server run in ${process.env.NODE_ENV} on port ${PORT} 🙂 ...`.yellow.bold);
})