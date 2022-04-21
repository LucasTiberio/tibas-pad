import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: 8px;

  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  transition: box-shadow 0.3s linear;
  
  cursor: pointer;
`

export const Wrapper = styled.div<{ flex?: number }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  flex: ${({ flex }) => flex || 0};
`

export const NoteName = styled.span`
  font-size: 14px;
  font-weight: 800;
`

export const NoteUpdatedAt = styled.span`
  font-size: 12px;
  font-weight: 300;
`

export const NoteGoButton = styled.div``