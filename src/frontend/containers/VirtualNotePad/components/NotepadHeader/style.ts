import styled, { css } from 'styled-components'
import { NOTEPAD_HEADER_HEIGHT } from '.'

export const ShadowBackground = styled.div`
  background: rgb(226, 226, 226);
  background: linear-gradient(
    180deg,
    rgba(226, 226, 226, 1) 10%,
    transparent 100%
  );

  @media screen and (max-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(226, 226, 226, 1) 0%,
      transparent 100%
    );
  }
`

const HeaderWrapperCss = css`
  padding: 0 64px;
  display: flex;
  align-items: center;
`

export const HeaderTitleWrapper = styled.div`
  ${HeaderWrapperCss};
`

export const HeaderContentWrapper = styled.div`
  ${HeaderWrapperCss};

  font-size: 24px;

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`

export const Container = styled.div`
  max-width: 920px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  height: ${() => NOTEPAD_HEADER_HEIGHT};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FixedLayout = styled.div`
  height: ${() => NOTEPAD_HEADER_HEIGHT};
  width: 100vw;

  /* position: fixed;
  top: 0;
  left: 0; */
`
export const HeaderNoteHistorySelect = styled.select`
  background: transparent;
  border: none;
  outline: none;
  
  cursor: pointer;
`
