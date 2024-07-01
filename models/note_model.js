import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    notesId: {type:String},
    notesType: {enum: ['official', 'unofficial']},
    description:{type:String},
	status:{enum:['draft','complete']},
    createAt:{type:Date, default: Date.now()},
    updatedAt:{type:Date, default: Date.now()}
});

export const notesModel = model('notes', noteSchema);