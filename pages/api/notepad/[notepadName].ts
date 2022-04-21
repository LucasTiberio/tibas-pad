import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../src/backend/lib/mongooseConnect'
import getNotepad from '../../../src/backend/services/get-notepad'
import setNotepad from '../../../src/backend/services/set-notepad'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  await dbConnect()
  // await Pusher.connect()

  // if (!pusherSubscription) pusherSubscription = Pusher.subscribe('tibas-labs')

  switch (method) {
    case 'GET':
      await getNotepad(req, res)
      break
    case 'POST':
      await setNotepad(req, res)
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
