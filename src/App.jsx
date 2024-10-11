import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from './pages/Transaction/Transaction';
import Support from './pages/Support/Support'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/transaction",
    element: <Transaction></Transaction>,
  },
  {
    path: "/support",
    element: <Support></Support>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
