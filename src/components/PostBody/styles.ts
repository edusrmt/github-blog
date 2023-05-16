import styled from 'styled-components'

export const PostBodyContainer = styled.div`
  color: ${(props) => props.theme.text};
  padding: 2.5rem 2rem;

  p + p {
    margin-top: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0 0.5rem;
  }
`
