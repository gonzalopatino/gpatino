import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const HowIWork = lazy(() => import('./pages/HowIWork'))
const Resume = lazy(() => import('./pages/Resume'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
