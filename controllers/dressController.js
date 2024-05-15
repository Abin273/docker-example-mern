const Dress = require('../models/dressModel');


const getAllDresses = async(req,res)=>{
    try {
        const dresses = await Dress.find();
        res.status(200).json({
            status: 'success',
            data: dresses
        })
    } catch (error) {
        console.log(error); 
        res.status(400).json({status: "fail"})      
    }
}

const getADress = async(req,res)=>{
    try {
        const dress = await Dress.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: dress
        })
    } catch (error) {
        console.log(error); 
        res.status(400).json({status: "fail"})      
    }
}
      
const createADress = async(req,res)=>{
    try {
        const dress = await Dress.create(req.body)
        res.status(200).json({
            status: 'success',
            data: dress
        })
    } catch (error) {
        console.log(error); 
        res.status(400).json({status: "fail"})      
    }
}

const updateADress = async(req,res)=>{
    try {
        const dress = await Dress.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200).json({
            status: 'success',
            data: dress
        })
    } catch (error) {
        console.log(error); 
        res.status(400).json({status: "fail"})      
    }
}

const deleteADress = async(req,res)=>{
    try {
        const dress = await Dress.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success'
        })
    } catch (error) {
        console.log(error); 
        res.status(400).json({status: "fail"})      
    }
}

module.exports = { getAllDresses, getADress, createADress, updateADress, deleteADress }