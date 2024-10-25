import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"

import { WelcomePage } from "./pages/WelcomePage"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Home } from "./pages/Home"
import { Dishe } from "./pages/Dishe"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </StrictMode>
)
