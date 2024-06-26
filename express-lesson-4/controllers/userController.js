const userModel = require('../models/user.model');


const userController = {};


userController.getAll = async (req, res) => {

    try {
        const result = await userModel.find();
        return res.status(200).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.message});
    }
};


userController.getOne = async (req, res) => {
    if(!res.getDetailsById){
        return res.status(404).json({"massage": "not found"})
    }
    res.json(res.getDetailsById);
};


userController.post = async (req, res) => {
    let body = req.body;
    // validation of data
    if(!body.name || !body.email || !body.password){
        return res.status(400).json({"massage": "bad request, incomplete credentials"})
    }
    const data = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        kind: req.body.kind
    })

    try {
        const result = await data.save();
        return res.status(201).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error"});
    }
};


userController.put = async (req, res) => {

    // const body = req.body;

    // const id = req.params.id;

    // const options = {new: true};

    // try {
    //     const result = await userModel.findByIdAndUpdate(id, body, options);
    //     return res.status(200).json(result);
    // } catch (error) {
    //     console.log('there was an error: ', error);
    //     return res.status(500).json({"message": "internal server error: " + error.massage});
    // }


    const body = req.body;

    const options = {new: true};

    try {
        const result = await userModel.findByIdAndUpdate(res.getDetailsById, body, options);
        return res.status(200).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.massage});
    }
};

userController.patch = async (req, res) => {
    let body = req.body;
    if(body.name != null){
        res.getDetailsById.name = body.name;
    }
    if(body.email != null){
        res.getDetailsById.email = body.email;
    }
    if(body.password != null){
        res.getDetailsById.password = body.password;
    }

    try {
        const result = await res.getDetailsById.save();
        return res.status(201).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error: " + error.massage});
    }
};


userController.delete = async (req, res) => {
    // const body = req.body;

    // const id = req.params.id;

    // const options = {new: true};

    // try {
    //     const result = await userModel.findByIdAndDelete(id);
    //     return res.status(200).json(result);
    // } catch (error) {
    //     console.log('there was an error: ', error);
    //     return res.status(500).json({"message": "internal server error: " + error.massage});
    // }

    try {
        const result = await userModel.deleteOne(res.getDetailsById);
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
        detailsById = await userModel.findById(id);
        if(detailsById == null){
            return res.status(404).json({message: "not found!"});
        }
    } catch (error) {
        return res.status(500).json({message: "server error: " + error.message});
    }

    res.getDetailsById = detailsById;
    next();

}



module.exports = {userController, getDetailsById};