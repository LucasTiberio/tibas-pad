import mongoose from 'mongoose'
import { iNotepad } from '../interfaces/api/notepad'

const NotepadSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    protection: { type: String, required: false, default: '' },
    content: { type: String, default: '', required: true },
  },
  {
    _id: true,
    timestamps: true,
  }
)

export default mongoose.models.Notepad ||
  mongoose.model<iNotepad>('Notepad', NotepadSchema)
