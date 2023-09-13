import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Launchpad from './Launchpad/Launchpad'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/launchpad" element={<Launchpad />} />
        </Routes>
    )
}

export default Router