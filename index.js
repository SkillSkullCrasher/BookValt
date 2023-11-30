import express from 'express';
import { PORT ,mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import router from './routes/bookroutes.js';
import { BookModel } from './Models/bookModel.js';
import cors from 'cors';
const app=express();

app.use(express.json());


// MIDDLEWARE FOR HANDLING CORS POLICY
//ALLow all origins with default of CORS(*);

app.use(cors());

// app.uscd

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('welcome')
});

//add router
app.use('/library',router);

mongoose.connect(mongoDBURL).then(()=>{
    console.log('app connected');
    app.listen(PORT,()=>{
        console.log(`App is listening: ${PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})


