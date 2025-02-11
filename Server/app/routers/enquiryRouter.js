const express = require('express');
const { enquiryInsert, enquiryView,enquiryDelete ,enquiryUpdate} = require('../controller/enquiryControler');
const enquiryRouter = express.Router();

enquiryRouter.post('/insert',enquiryInsert)
enquiryRouter.get('/view',enquiryView)      
enquiryRouter.delete('/delete/:id',enquiryDelete)
enquiryRouter.put('/update/:id',enquiryUpdate)

module.exports = enquiryRouter;