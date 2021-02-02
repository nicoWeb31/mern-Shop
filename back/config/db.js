import mongoose from 'mongoose';

export default async()=>{
    const URI = process.env.MONGO_URI.replace('<password>', process.env.MONGO_PASS)

    try{
        const connection = await mongoose.connect(URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(` Connection to mongoDb is established.... 🙂 !! : ${connection.connection.host}`.cyan.underline);

    }catch(err){
        console.log(`Error : ${err.message}.red.underline.bold`);
        process.exit(1);
    }
}