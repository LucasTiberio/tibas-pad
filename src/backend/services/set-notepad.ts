import { NextApiRequest, NextApiResponse } from 'next'
import Notepad from '../../../src/backend/models/Notepad'

const setNotepad = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | null> => {
  try {
    const { notepadName: name } = req.query;
    const { content, protection } = req.body
    if (!name || !content) throw 'missing name or content in body'

    const newNotepad = {
      name,
      content,
      protection,
    }

    const notepad = await Notepad.findOneAndUpdate(
      {
        name,
      },
      newNotepad,
      {
        new: true,
        setDefaultsOnInsert: true,
        upsert: true,
      }
    )

    if (!notepad) throw 'no notepad found'

    res.status(200).json({ success: true, data: newNotepad })
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export default setNotepad
