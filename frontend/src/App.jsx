import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"

import Home from './pages/Home'
import Book from './components/Book'
import Login from './pages/Login'
import Signup from './pages/Signup'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/books',
    element: (
      <>
        <SignedIn>
          <Book />
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
