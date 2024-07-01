import { Router } from "express";
import { addNotes, deleteNotes, getNotes, getSpecificNotes, updateNotes } from "../controllers/note_controller.js";


export const router = Router();

router.post('/note', addNotes);

router.get('/note', getNotes);

router.get('/note/:id', getSpecificNotes);

router.patch('/note/:id', updateNotes);

router.delete('/note/:id', deleteNotes);
