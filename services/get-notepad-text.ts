import { GetNotepadResponse } from '../interfaces/api/notepad'
import instance from './api'
import { SERVICE_ROUTES } from './enums'

const getNotepadText = async (): Promise<GetNotepadResponse | null> => {
  try {
    const axiosData = await instance.get(SERVICE_ROUTES.NOTEPAD)

    if (!axiosData.data.error) return axiosData.data
    else throw new Error(axiosData.data)
  } catch (error) {
    console.error('error', error)
    return null
  }
}

export default getNotepadText
