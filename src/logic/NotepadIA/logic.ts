import { useCallback, useState } from 'react'
import { doubleAsterisksToBold } from './helper'
import { iUseNotepadIALogic } from './interface'

export const useNotepadIALogic = (): iUseNotepadIALogic => {
  const [update, triggerUpdate] = useState(false)

  const performIA = useCallback(
    async (
      inputValue = '',
      onFinishPerform?: (finalValue: string) => void
    ): Promise<string> => {
      let finalValue = inputValue

      // Perform Double Asterisks To Bold
      // -> **BOLD** Not Bold *Not Bold*
      finalValue = doubleAsterisksToBold(inputValue)

      if (finalValue !== inputValue) triggerUpdate(!update)

      onFinishPerform && onFinishPerform(finalValue)
      return finalValue
    },
    [update]
  )

  return {
    performIA,
    update,
  }
}
