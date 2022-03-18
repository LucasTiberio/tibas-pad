import { Fragment } from 'react'
import NotepadHeader from './components/NotepadHeader'
import NoteTaking from './components/NoteTaking'

const VirtualNotePad: React.FC = () => {
  return (
    <Fragment>
      <NotepadHeader />
      <NoteTaking />
    </Fragment>
  )
}

export default VirtualNotePad
