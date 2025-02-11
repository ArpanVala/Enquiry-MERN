const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const enquiryRouter = require('./app/routers/enquiryRouter');
const app = express();

app.use(cors());

require('dotenv').config();

app.use(express.json());

app.use('/api',enquiryRouter);


mongoose.connect(process.env.DBURL).then(()=>{
    console.log('Connected to Database');
    app.listen(process.env.PORT || 3000,()=>{
        console.log('Server is running on port '+process.env.PORT);
    })
}).catch((err)=>{
    console.log('Error connecting to Database',err);
}
)