import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"


import { Routes } from "./routes"

import { WelcomePage } from "./pages/WelcomePage"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"

import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Dishe } from "./pages/Dishe"

import { HomeAdmin } from "./pages/HomeAdmin"
import { MenuAdmin } from "./pages/MenuAdmin"
import { DisheAdmin } from "./pages/DisheAdmin"
import { NewDishe } from "./pages/NewDishe"
import { EditDishe } from "./pages/EditDishe"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  </StrictMode>
)
