import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Header from './components/nav/Header';
import Dashboard from './components/Dashboard/dashboard'
import SignUp from './components/Profile/SignUp'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Dashboard />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  )
)

function App () {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
