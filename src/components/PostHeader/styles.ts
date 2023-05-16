import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const PostHeaderContainer = styled.section`
  background: ${(props) => props.theme.profile};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.title};
  }

  img {
    width: 148px;
    height: 148px;
    margin-right: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Navigation = styled.div`
  color: ${(props) => props.theme.white};
  margin-bottom: 1.25rem;

  display: flex;
  justify-content: space-between;
`

const linkStyle = css`
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.blue};

  display: flex;
  gap: 0.5rem;
  margin: 0 0 auto;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const NavigationLink = styled(Link)`
  ${linkStyle}
`

export const NavigationAnchor = styled.a`
  ${linkStyle}
`

export const InfosContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
`

export const InfoItem = styled.div`
  color: ${(props) => props.theme.span};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.label};
  }
`
