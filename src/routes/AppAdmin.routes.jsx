import { Routes, Route } from "react-router-dom"

import { HomeAdmin } from "../pages/HomeAdmin"
import { MenuAdmin } from "../pages/MenuAdmin"
import { DisheAdmin } from "../pages/DisheAdmin"
import { NewDishe } from "../pages/NewDishe"
import { EditDishe } from "../pages/EditDishe"

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/menu" element={<MenuAdmin />} />
      <Route path="/dishe/:id" element={<DisheAdmin />} />
      <Route path="/new" element={<NewDishe />} />
      <Route path="/edit" element={<EditDishe />} />
    </Routes>
  )
}
