import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Menu } from "../pages/Menu"
import { Dishe } from "../pages/Dishe"

export function AppUserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dishe/:id" element={<Dishe />} />
    </Routes>
  )
}
