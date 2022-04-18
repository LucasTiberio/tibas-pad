import { NextApiRequest, NextApiResponse } from 'next'
import Notepad from '../../../src/models/Notepad'

const getNotepad = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { notepadName: name } = req.query;
  if (!name) throw 'missing name in body';

  try {
    const notepad = await Notepad.find({
      name,
    }).lean();

    if (!notepad) throw 'no notepad found'

    res.status(200).json({ success: true, data: notepad[0] })
  } catch (error) {
    res.status(400).json({ success: false, data: [], error })
  }
}

export default getNotepad
