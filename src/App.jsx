import './App.css'
import './EPK.css'
import Background from './Background'
import EPK from './EPK'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Background />,
    },
    {
      path: "/epk",
      element: <EPK />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
