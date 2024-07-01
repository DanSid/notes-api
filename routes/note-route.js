import { Router } from "express";
import { addNotes, deleteNotes, getNotes, getSpecificNotes, updateNotes } from "../controllers/note_controller.js";


export const router = Router();

router.post('/notes', addNotes);

router.get('/notes', getNotes);

router.get('/notes/:id', getSpecificNotes);

router.patch('/notes/:id', updateNotes);

router.delete('/notes/:id', deleteNotes);
