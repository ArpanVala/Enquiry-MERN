const enquiryModel = require('../models/enquiryModel');

let enquiryInsert = (req,res)=>{
    let {name,email,phone,msg}=req.body
    let enquiry= new enquiryModel({
        name,
        email,
        phone,
        msg
    })
    enquiry.save().then((data)=>{
        res.send({statusCode:1,message:"Enquiry inserted",data})
    }).catch((err)=>{
        res.send({statusCode:0,message:err.message})
    })
}

let enquiryView = (req,res)=>{
    enquiryModel.find().then((data)=>{
        res.send({statusCode:1,enquiryList:data})

    }).catch((err)=>{
        res.send({statusCode:0,message:err.message})
    })

}

let enquiryDelete = (req,res)=> {
    let id = req.params.id;
    enquiryModel.deleteOne({_id:id}).then(()=>{
        res.send({statusCode:1,message:`${id} enquiry deleted`})
    }).catch((err)=>{
        res.send({statusCode:0,message:err.message})
    })
}   

let enquiryUpdate = (req,res)=>{
    let id = req.params.id;
    let {name,email,phone,msg}=req.body
    enquiryModel.updateOne({_id:id},{
        name,
        email,
        phone,
        msg
    }).then(()=>{
        res.send({statusCode:1,message:`${id} enquiry updated`})
    }).catch((err)=>{
        res.send({statusCode:0,message:err.message})
    })
}

module.exports = {enquiryInsert,enquiryView,enquiryDelete,enquiryUpdate}