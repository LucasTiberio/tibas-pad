import styled from 'styled-components'
import TextAreaActionButton from '../TextAreaActionButton'

export const Container = styled.div`
  display: flex;
  /* background: rgba(0, 0, 0, 0.5); */
`

export const TextAreaActionButtonOnlyMobile = styled(TextAreaActionButton)`
  * {
    display: none !important;
  }
`
