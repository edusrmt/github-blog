import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme.profile};
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;

  img {
    width: 148px;
    height: 148px;
    margin-right: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    flex: 1;
  }
`

export const Heading = styled.div`
  color: ${(props) => props.theme.white};
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;
`

export const GitHubLink = styled.a`
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

export const InfosContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const InfoItem = styled.div`
  color: ${(props) => props.theme.subtitle};
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.label};
  }
`
