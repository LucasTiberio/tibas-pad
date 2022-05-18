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

export const NoteInformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  flex: 1;
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: flex;
`

export const NoteName = styled.span`
  font-size: 14px;
  font-weight: 800;
`

export const NoteUpdatedAt = styled.span`
  font-size: 12px;
  font-weight: 300;
`

export const NoteGoButton = styled.div`
  font-weight: bold;
`

export const NoteDeleteButton = styled.div`
  color: red;

  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 16px;
`