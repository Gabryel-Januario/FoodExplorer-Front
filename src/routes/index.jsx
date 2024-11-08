import { BrowserRouter } from "react-router-dom"

import { AppUserRoutes } from "./appUser.routes"
import { AppAdminRoutes } from "./AppAdmin.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
  return (
    <BrowserRouter>
      <AppAdminRoutes />
    </BrowserRouter>
  )
}
