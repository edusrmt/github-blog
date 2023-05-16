import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ProfileContainer,
  Content,
  Heading,
  GitHubLink,
  InfosContainer,
  InfoItem,
} from './styles'
import { api } from '../../lib/axios'

export function Profile() {
  const [userData, setUserData] = useState({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  async function fetchProfile() {
    const response = await api.get('users/edusrmt')
    const { avatar_url, name, bio, login, company, followers } = response.data

    setUserData({
      avatar_url,
      name,
      bio,
      login,
      company,
      followers,
    })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={userData.avatar_url} alt="user profile picture" />
      <Content>
        <Heading>
          <h1>{userData.name}</h1>
          <GitHubLink
            href={`https://github.com/${userData.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GitHubLink>
        </Heading>

        <p>{userData.bio}</p>

        <InfosContainer>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData.login}</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{userData.company ? userData.company : 'N/A'}</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userData.followers} followers</span>
          </InfoItem>
        </InfosContainer>
      </Content>
    </ProfileContainer>
  )
}
