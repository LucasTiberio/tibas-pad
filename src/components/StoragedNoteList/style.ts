import styled from 'styled-components'

interface iStyled {
  opened: boolean;
}

export const Container = styled.div`
  position: relative;
`

export const NoteHistoryListWrapper = styled.div<iStyled>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  height: 100%;
  height: ${({ opened }) => opened ? '100%' : '0px'};
  max-height: ${({ opened }) => opened ? '300px' : '0px'};

  overflow-y: scroll;
  transition: max-height 0.5s;
`

export const BottomFixedWrapper = styled.div<iStyled>`
  position: absolute;

  top: ${({ opened }) => opened ? '100%' : '0px'};
  left: 50%;
  
  transform: translateX(-50%) ${({ opened }) => opened ? 'rotate(90deg)' : 'rotate(270deg)'};
`

export const ToggleNoteHistoryListWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  font-size: 12px;
  
  background: #333;
  color: #f3f3f3;
  
  cursor: pointer;
`