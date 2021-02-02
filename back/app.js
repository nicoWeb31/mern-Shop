//express server
import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';




//routes
import userRoute from './routes/authRoute.js';


//____________________middlware_________________________________
//MORGAN 
if(process.env.NODE_ENV !== 'production') {
    app.use(morgan("dev"));
}
//parser
app.use(express.json({limit:"2mb"}));
//test
app.use((req,res,next) => {
    console.log('welcome in first middleware 😻 ');
    next();
})
//cors 
app.use(cors());


///_____________________routes middlware_______________________________________
app.use("/api/v1/users",userRoute)




//router server

export default app;