
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider';
const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      <Toaster />
    </>
  )
}

export default App