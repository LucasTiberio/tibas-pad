import styled from 'styled-components'
import { ACTION_BUTTON_SIZE } from '../../components/TextAreaActionButton/style'

export const VirtualNotePadContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`

export const WrapperNoteTaking = styled.div`
  overflow-y: scroll;
  flex: 1;
`

export const FixedWrapperNoteTakingActions = styled.div<{ opened?: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 50%;

  transform: translateX(-50%);

  @media screen and (max-width: 768px) {
    left: ${({ opened }) =>
      opened ? '50%' : `calc(100% - ${ACTION_BUTTON_SIZE})`};
    transform: ${({ opened }) =>
      opened ? 'translateX(-50%)' : 'translateX(0%)'};

    transition: all 0.2s linear;
  }
`
