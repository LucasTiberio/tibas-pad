import { HeightAndMaxWidthContainer } from './style'
import dynamic from 'next/dynamic'

const NotepadTextArea = dynamic(
  () => import('../../../../components/NotepadTextArea'),
  { ssr: false }
)

const NoteTaking = (): JSX.Element => {
  return (
    <HeightAndMaxWidthContainer>
      <NotepadTextArea />
    </HeightAndMaxWidthContainer>
  )
}

export default NoteTaking
