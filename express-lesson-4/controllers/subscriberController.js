const subscriberModel = require('../models/subscriber.model');


const subscriberController = {};


subscriberController.getAll = async (req, res) => {

    try {
        const result = await subscriberModel.find();
        return res.status(200).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.message});
    }
};


subscriberController.getOne = async (req, res) => {
    if(!res.getDetailsById){
        return res.status(404).json({"massage": "not found"})
    }
    res.json(res.getDetailsById);
};


subscriberController.post = async (req, res) => {
    let body = req.body;
    // validation of data
    if(!body.name || !body.email){
        return res.status(400).json({"massage": "bad request, incomplete credentials"})
    }
    const data = new subscriberModel({
        name: req.body.name,
        email: req.body.email,
    })

    try {
        const result = await data.save();
        return res.status(201).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error"});
    }
};


subscriberController.put = async (req, res) => {

    const body = req.body;

    const options = {new: true};

    try {
        const result = await subscriberModel.findByIdAndUpdate(res.getDetailsById, body, options);
        return res.status(200).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.massage});
    }
};

subscriberController.patch = async (req, res) => {

    let body = req.body;
    if(body.name != null){
        res.getDetailsById.name = body.name;
    }
    if(body.email != null){
        res.getDetailsById.email = body.email;
    }

    try {
        const result = await res.getDetailsById.save();
        return res.status(201).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.massage});
    }
};


subscriberController.delete = async (req, res) => {
 
    try {
        const result = await subscriberModel.deleteOne(res.getDetailsById);
        return res.status(200).json({"message": "record deleted", result});
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.massage});
    }
};


async function getDetailsById(req, res, next){
    const id = req.params.id;
    let detailsById;
    try {
        detailsById = await subscriberModel.findById(id);
        if(detailsById == null){
            return res.status(404).json({message: "not found!"});
        }
    } catch (error) {
        return res.status(500).json({message: "server error: " + error.message});
    }

    res.getDetailsById = detailsById;
    next();

}



module.exports = {subscriberController, getDetailsById};