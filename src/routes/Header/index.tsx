import { Outlet } from 'react-router-dom'

import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="GitHub Blog logo" />
        </HeaderContent>
      </HeaderContainer>
      <Outlet />
    </>
  )
}
