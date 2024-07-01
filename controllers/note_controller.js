import { notesModel } from "../models/note_model.js";

// To add notes
export const addNotes = async(req,res) =>{
try {
    console.log('request', req.body);
const addData = await notesModel.create(req.body)
res.status(200).send(addData)
} catch (error) {
    console.log(error);
}


}

// To find all the Notes
export const getNotes = async(req,res) =>{

try {
    console.log('Geting data', req.body);
const getData = await notesModel.find()
res.status(200).send(getData)
} catch (error) {
    console.log(error);
}


}

// To get/find a specific Notes through an ID
export const getSpecificNotes = async (req,res) =>{

try {
    console.log('Geting specific notes data', req.body);
const getNoteData = await notesModel.findById(req.params.id)
res.status(200).send(getNoteData)
} catch (error) {
    console.log(error);
}
}

// To update a specific Notes and update the status field or a particular field
export const updateNotes = async(req,res) =>{

try {
    const status = req.body.status
    console.log("request",status)
const updateNote = await notesModel.findByIdAndUpdate(req.params.id, {status:status})
res.status(200).send(updateNote)
} catch (error) {
    console.log(error);
}
}

// To delete a specific Notes and delete the particular ID
export const deleteNotes = async(req,res) =>{

try {
const updateSpeci = await notesModel.findByIdAndDelete(req.params.id)
res.status(200).send(`Notes with ID number ${req.params.id} has been deleted`)
} catch (error) {
    console.log(error);
}
}