import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"

import { WelcomePage } from "./pages/WelcomePage"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WelcomePage />
    </ThemeProvider>
  </StrictMode>
)
