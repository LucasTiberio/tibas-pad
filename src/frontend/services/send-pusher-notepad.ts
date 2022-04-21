import instance from './api'
import { SERVICE_ROUTES } from './enums'

const sendPusherNotepad = async (value = ''): Promise<boolean> => {
  try {
    const axiosData = await instance.post(SERVICE_ROUTES.PUSHER, {
      content: value,
    })

    if (!axiosData.data.error) return true
    else throw new Error(axiosData.data)
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export default sendPusherNotepad
