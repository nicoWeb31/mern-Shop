//express server
import express from 'express';
const app = express();
import morgan from 'morgan';


//middleware server
app.use((req,res,next) => {
    console.log('welcome in first middleware 😻 ');
    next();
})

//MORGAN 
if(process.env.NODE_ENV !== 'production') {
    app.use(morgan("dev"));
}


//router server

export default app;