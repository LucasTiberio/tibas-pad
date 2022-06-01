import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid #ddd;


  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
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

export const NoteDeleteButton = styled.div`
  color: red;

  font-size: 1.2rem;
  font-weight: bold;
`