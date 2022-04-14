import { NextApiRequest, NextApiResponse } from 'next'
// import { pusherSubscription } from '../_middleware'

const sendPusherNotepadNotification = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | null> => {
  try {
    const { content } = req.body
    if (!content) throw 'missing content in body'

    const newNotepad = {
      content,
    }

    // pusherSubscription?.trigger('client-tpad-notepad-change', {
    //   message: 'CHEGOU?',
    // })
    console.log('aquizao 2')

    res.status(200).json({ success: true, data: newNotepad })
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export default sendPusherNotepadNotification
