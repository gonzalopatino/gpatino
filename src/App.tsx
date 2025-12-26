import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const HowIWork = lazy(() => import('./pages/HowIWork'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const Tutorials = lazy(() => import('./pages/Tutorials'))
const TutorialDetail = lazy(() => import('./pages/TutorialDetail'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:slug" element={<TutorialDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
