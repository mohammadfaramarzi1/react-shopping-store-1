import React from 'react'
import {Routes, Route} from "react-router-dom"

function Router() {
  return (
    <Routes>
        <Route index element={<HomePage />} />
    </Routes>
  )
}

export default Router