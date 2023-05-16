import { Outlet } from 'react-router-dom'

import { ArticlesGrid } from '../../components/ArticlesGrid'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <HomeContainer>
        <Profile />
        <SearchForm />
        <ArticlesGrid />
      </HomeContainer>
    </>
  )
}