import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Launchpad from './Launchpad/Launchpad'
import Dao from './Dao/Dao'
import Liquidity from './Liquidity/Liquidity'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/dao" element={<Dao />} />
            <Route path="/liquidity" element={<Liquidity />} />
        </Routes>
    )
}

export default Router