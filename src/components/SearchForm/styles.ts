import { styled } from 'styled-components'

export const Heading = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.subtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.span};
  }
`

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.text};
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }
`
