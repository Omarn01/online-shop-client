import { Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'

function App() {
  return (
    <Routes>
      {routes.map(({ id, path, Component }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

export default App
