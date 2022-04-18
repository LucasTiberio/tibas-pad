import { iNotepad } from '../interfaces/api/notepad'
import instance from './api'
import { SERVICE_ROUTES } from './enums'
import { SET_NOTEPAD_TEXT_RESPONSE } from './interface'

const setNotepadText = async (
  name: string,
  params: Omit<iNotepad, 'name'>,
): Promise<SET_NOTEPAD_TEXT_RESPONSE | null> => {
  try {
    const axiosData = await instance.post(`${SERVICE_ROUTES.NOTEPAD}/${name}`, params)

    if (!axiosData.data.error) return true
    else throw new Error(axiosData.data)
  } catch (error) {
    console.error('error', error)
    return null
  }
}

export default setNotepadText
