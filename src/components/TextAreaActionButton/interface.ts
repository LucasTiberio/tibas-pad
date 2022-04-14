export interface iTextAreaActionButton {
  cmd?: 'italic' | 'bold' | 'hyperlink'
  arg?: string
  name: string
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  show?: boolean
  mobileOnly?: boolean
}
