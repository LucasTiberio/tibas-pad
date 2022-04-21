import React from 'react'
import { iTextAreaActionButton } from './interface'
import { ActionButton } from './style'

const TextAreaActionButton = ({
  cmd,
  arg,
  name,
  onClick,
  show,
  mobileOnly,
}: iTextAreaActionButton): JSX.Element => {
  return (
    <ActionButton
      key={cmd}
      show={show}
      mobileOnly={mobileOnly}
      onMouseDown={(evt) => {
        evt.preventDefault()
        if (cmd) document.execCommand(cmd, false, arg) // Send the command to console browser
        if (onClick) onClick(evt)
      }}
    >
      {name || cmd}
    </ActionButton>
  )
}

export default TextAreaActionButton
