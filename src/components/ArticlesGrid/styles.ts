import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ArticlesGridContainer = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const ArticleContainer = styled(Link)`
  background: ${(props) => props.theme.post};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const Heading = styled.div`
  margin-bottom: 1.25rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme.title};
  }

  span {
    color: ${(props) => props.theme.span};
    flex-shrink: 0;
  }
`
