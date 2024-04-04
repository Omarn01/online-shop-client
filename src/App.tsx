import { Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import Layout from './components/ui/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Routes>
    </Layout>
  )
}

export default App
