import styled, { css } from 'styled-components'
import { NOTEPAD_HEADER_HEIGHT } from '.'

export const ShadowBackground = styled.div`
  background: rgb(226, 226, 226);
  background: linear-gradient(
    180deg,
    rgba(226, 226, 226, 1) 0%,
    transparent 90%
  );
`

const HeaderWrapperCss = css`
  padding: 0 64px;

  @media screen and (max-width: 768px) {
    padding: 20px 0 0 20px;
  }
`

export const HeaderTitleWrapper = styled.div`
  ${HeaderWrapperCss};
`

export const HeaderContentWrapper = styled.div`
  ${HeaderWrapperCss};

  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Container = styled.div`
  max-width: 920px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  height: ${() => NOTEPAD_HEADER_HEIGHT};
`

export const FixedLayout = styled.div`
  height: ${() => NOTEPAD_HEADER_HEIGHT};
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
`
