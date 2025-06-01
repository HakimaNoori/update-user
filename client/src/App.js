import React from 'react'
import User from './getuser/User'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddUser from './adduser/AddUser.jsx'
import UpdateUser from './updateuser/UpdateUser.jsx'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser/>
    }
  
  ]);
    return (
      <div className='App'>
        <RouterProvider router={router} ></RouterProvider>
      </div>
    );
  }

export default App
