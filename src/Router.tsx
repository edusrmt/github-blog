import { Routes, Route } from 'react-router-dom'

import { Header } from './routes/Header'
import { Home } from './routes/Home'
import { Post } from './routes/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="posts/:postNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}
