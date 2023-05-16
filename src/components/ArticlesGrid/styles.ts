import styled from 'styled-components'

export const ArticlesGridContainer = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const ArticleContainer = styled.article`
  background: ${(props) => props.theme.post};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h3 {
    color: ${(props) => props.theme.title};
  }

  span {
    color: ${(props) => props.theme.span};
    flex-shrink: 0;
  }
`
