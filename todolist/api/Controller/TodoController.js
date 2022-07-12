
const Data = require('../Model/TodoModel')

exports.GetData = async (req, res) =>{
    try{
        const data = await Data.find()
        res.json(data)
    }catch(err) {
        res.json({message: err})
    }
};

exports.PostData = async (req, res) => {
    const data = new Data({
        Item: req.body.Item,
        TypeItem: req.body.TypeItem,
        Radio: req.body.Radio
      });
    try{
        const savedData = await data.save().then((result) =>{
            res.status(200).json({
                message: "Data registered successfully!",
                code: 200,
                DataCreated:{
                    _id : result._id,
                    Item : result.Item,
                    TypeItem: result.TypeItem,
                    Radio: result.Radio
                }
            })
        })
        res.json(savedData)
    }catch(err) {
        res.json({message: err})
    }
};

exports.DeleteData = (req, res) =>{
    Data.remove({_id: req.params._id}, function(err, response){
        if(err) {
            res.status(201).json({
                code:201,
                message: "Error from DeleteData"
            })
        }else{
            res.status(200).json({
                code:200,
                message:"Deleted successfully",
                data: response
            })
        }
    })
}

exports.GetById = async(req, res) =>{
    try{
        const data = await Data.findById(req.params._id)
        res.json(data)
    }catch(err) {
        res.json({message:err})
    }
};

exports.UpdateData = async (req, res) =>{
    const updateData = {
        Item: req.body.Item,
        TypeItem: req.body.TypeItem,
        Radio: req.body.Radio
    }
    Data.findByIdAndUpdate({_id: req.params._id}, updateData, function(err, response){
        if(err){
            res.status(201).json({
                code:201,
                message:"Error Update"
            })
        }else{
            res.status(200).json({
                code:200,
                message:"Update successfully!",
                data: response
            })
        }
    })
};

